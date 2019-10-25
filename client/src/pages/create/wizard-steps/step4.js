import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createResume, clearDraft, updateResume } from '../../../actions';
import * as selectors from "../../../selectors";

import { API } from '../../../services';

import InputField from '../../../components/input-field';
import Button from '../../../components/button';

class Step4 extends Component {
    constructor(props) {
        super(props);

        this.handleFinish = this.handleFinish.bind(this);
    }

    handleFinish() {
        let draft = this.props.draft;

        if (draft._id) {
            API.updateResume(draft._id, draft).then(res => {
                let data = res.data;
                console.log('data: ', data);
                if (data.status === 'success') {
                    this.props.updateResume(draft._id, data.data);
                    alert('Updated');

                    this.props.clearDraft();
                    this.props.onFinish();
                }
                else
                    alert('Invalid username / password')

            }).catch(err => {
                console.log(err);
            });
        } else {
            API.createResume(draft).then(res => {
                let data = res.data;
                console.log('data: ', data);
                if (data.status === 'success') {
                    this.props.createResume(data.data);
                    alert('Success');

                    this.props.clearDraft();
                    this.props.onFinish();
                }
                else
                    alert('Invalid username / password')

            }).catch(err => {
                console.log(err);
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Step4</h2>
                <div className="card">
                    <div className="card-header">
                        <h4>Skills</h4>
                    </div>
                    <div className="card-body">
                        <InputField
                            ref={(e) => { this.skill = e; }}
                            label="Skill"
                            tabIndex="1"
                        />
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
});

const mapDispatchToProps = dispatch => ({
    createResume: draft => dispatch(createResume(draft)),
    updateResume: (id, data) => dispatch(updateResume(id, data)),
    clearDraft: () => dispatch(clearDraft())
});
export default connect(mapStateToProps, mapDispatchToProps)(Step4)