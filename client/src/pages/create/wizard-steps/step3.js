import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addExperience } from '../../../actions';
import * as selectors from "../../../selectors";

import InputField from '../../../components/input-field';
import Button from '../../../components/button';
import Item from '../../../components/experience-item';

class Step3 extends Component {
    constructor(props) {
        super(props);

        this.addExperience = this.addExperience.bind(this);
    }

    addExperience() {
        let company = this.company.input.value;
        let position = this.position.input.value;
        let startDate = this.startDate.input.value;
        let endDate = this.endDate.input.value;

        this.props.addExperience({
            company, position, startDate, endDate
        })
        console.log('company position startDate endDate: ', company, position, startDate, endDate);

    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h4>Work experience</h4>
                    </div>
                    <div className="card-body">
                        <InputField
                            ref={(e) => { this.company = e; }}
                            label="Company name"
                            tabIndex="11"
                        />
                        <InputField
                            ref={(e) => { this.position = e; }}
                            label="Position"
                            tabIndex="12"
                        />
                        <InputField
                            ref={(e) => { this.startDate = e; }}
                            label="Start date"
                            tabIndex="13"
                        />
                        <InputField
                            ref={(e) => { this.endDate = e; }}
                            label="End Date"
                            tabIndex="14"
                        />
                        <Button onClick={this.addExperience}>
                            Add
                        </Button>
                        <ul>
                            {this.props.experiences.map((experience, i) => (
                                <Item key={i.toString()} ckey={i} experience={experience} />
                            ))}
                        </ul>
                    </div>
                    <div className="card-footer">
                        <div className="float-left">
                            <Button onClick={this.props.previousStep}>
                                Previous
                            </Button>
                        </div>
                        <div className="float-right">
                            <Button onClick={this.props.nextStep}>
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    experiences: selectors.selectUserNewExperiences(state),
});

const mapDispatchToProps = dispatch => ({
    addExperience: experienceInfo => dispatch(addExperience(experienceInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Step3)