import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createResume, clearDraft, updateResume, updateSkills } from '../../../actions';
import * as selectors from "../../../selectors";

import { API } from '../../../services';

import Button from '../../../components/button';
import FileInput from '../../../components/file-input';

import Select from 'react-select'
import makeAnimated from 'react-select/animated';

import { toast } from 'react-toastify';

const animatedComponents = makeAnimated();

const options = [
    { label: "ExpressJs", value: "ExpressJs" },
    { label: "NodeJs", value: "NodeJs" },
    { label: "Javascript", value: "Javascript" },
    { label: "ReactJs", value: "ReactJs" },
    { label: "ReactNative", value: "ReactNative" },
    { label: "AWS", value: "AWS" },
    { label: "Firebase", value: "Firebase" },
    { label: "Git", value: "Git" },
    { label: "Linux", value: "Linux" },
    { label: "Bootstrap", value: "Bootstrap" },
    { label: "JQuery", value: "JQuery" },
    { label: "HTML/CSS", value: "HTML/CSS" },
    { label: "Mocha", value: "Mocha" },
    { label: "Chai", value: "Chai" }
];



class Step4 extends Component {
    constructor(props) {
        super(props);

        this.handleSkillChange = this.handleSkillChange.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
    }


    handleFinish() {
        let draft = this.props.draft;

        console.log('this.props.theme: ', this.props.theme);
        if (!this.props.theme) {
            return toast.error('Please select a theme', { position: toast.POSITION.TOP_CENTER })
        }

        if (draft._id) {
            API.updateResume(draft._id, draft).then(res => {
                let data = res.data;
                console.log('data: ', data);
                if (data.status === 'success') {
                    this.props.updateResume(draft._id, data.data);

                    toast.success('Successfully updated CV', { position: toast.POSITION.TOP_CENTER })

                    this.props.clearDraft();
                    this.props.onFinish();
                }
                else
                    toast.failed('Failed to update', { position: toast.POSITION.TOP_CENTER })

            }).catch(err => {
                console.log(err);
            });
        } else {

            API.createResume(draft).then(res => {
                let data = res.data;
                console.log('data: ', data);
                if (data.status === 'success') {
                    this.props.createResume(data.data);

                    toast.success('Successfully created CV', { position: toast.POSITION.TOP_CENTER })

                    this.props.clearDraft();
                    this.props.onFinish();
                }
                else
                    toast.failed('Failed to update', { position: toast.POSITION.TOP_CENTER })

            }).catch(err => {
                console.log(err);
            });
        }
    }

    handleSkillChange(value) {
        console.log('value: ', value);
        let list = value.map(i => i.label)
        this.props.updateSkills(list)
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h4>Skills</h4>
                    </div>
                    <div className="card-body">
                        <Select options={options}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            defaultValue={this.props.skills.map(i => ({ label: i, value: i }))}
                            styles={{ backgroundColor: 'red' }}
                            onChange={this.handleSkillChange}
                        />

                        <FileInput />
                       
                    </div>
                    <div className="card-footer">
                        <div className="float-left">
                            <Button onClick={this.props.previousStep}>
                                Previous
                            </Button>
                        </div>
                        <div className="float-right">
                            <Button onClick={this.handleFinish}>
                                Finish
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    draft: selectors.selectUserDraft(state),
    theme: selectors.selectUserDraftTheme(state),
    skills: selectors.selectUserNewSkills(state)
});

const mapDispatchToProps = dispatch => ({
    createResume: draft => dispatch(createResume(draft)),
    updateResume: (id, data) => dispatch(updateResume(id, data)),
    updateSkills: (id, data) => dispatch(updateSkills(id, data)),
    clearDraft: () => dispatch(clearDraft())
});
export default connect(mapStateToProps, mapDispatchToProps)(Step4)