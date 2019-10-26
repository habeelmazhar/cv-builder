import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addEducation } from '../../../actions';
import * as selectors from "../../../selectors";

import InputField from '../../../components/input-field';
import Button from '../../../components/button';
import Item from '../../../components/education-item';

class Step2 extends Component {
    constructor(props) {
        super(props);

        this.addEducation = this.addEducation.bind(this);
    }

    addEducation() {
        let institute = this.institute.input.value;
        let course = this.course.input.value;
        let grade = this.grade.input.value;
        let year = this.year.input.value;

        this.props.addEducation({
            institute, course, grade, year
        })
        console.log('institute course grade year: ', institute, course, grade, year);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <h4>Education</h4>
                    </div>
                    <div className="card-body">
                        <InputField
                            ref={(e) => { this.institute = e; }}
                            label="Institute name"
                            tabIndex="7"
                        />
                        <InputField
                            ref={(e) => { this.course = e; }}
                            label="Course name"
                            tabIndex="8"
                        />
                        <InputField
                            ref={(e) => { this.grade = e; }}
                            label="Grade / GPA"
                            tabIndex="9"
                        />
                        <InputField
                            ref={(e) => { this.year = e; }}
                            label="End Year"
                            tabIndex="10"
                        />
                        <Button onClick={this.addEducation}>
                            Add
                        </Button>
                        <ul>
                            {this.props.educations.map((education, i) => (
                               <Item key={i.toString()} ckey={i} education={education} />
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
    educations: selectors.selectUserNewEducations(state),
});

const mapDispatchToProps = dispatch => ({
    addEducation: educationInfo => dispatch(addEducation(educationInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Step2)