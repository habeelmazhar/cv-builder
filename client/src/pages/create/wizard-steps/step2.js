import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputField from '../../../components/input-field';
import Button from '../../../components/button';

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
 
        console.log('institute course grade year: ', institute, course, grade, year);
    }

    render() {
        return (
            <div>
                <h2>Step2</h2>
                <div className="card">
                    <div className="card-header">
                        <h4>Education</h4>
                    </div>
                    <div className="card-body">
                        <InputField
                            ref={(e) => { this.institute = e; }}
                            label="Institute name"
                            tabIndex="1"
                        />
                        <InputField
                            ref={(e) => { this.course = e; }}
                            label="Course name"
                            tabIndex="2"
                        />
                        <InputField
                            ref={(e) => { this.grade = e; }}
                            label="Grade / GPA"
                            tabIndex="3"
                        />
                        <InputField
                            ref={(e) => { this.year = e; }}
                            label="End Year"
                            tabIndex="4"
                        />
                        <Button onClick={this.addEducation}>
                            Add
                        </Button>
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

export default Step2