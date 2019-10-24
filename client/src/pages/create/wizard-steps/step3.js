import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputField from '../../../components/input-field';
import Button from '../../../components/button';

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
 
        console.log('company position startDate endDate: ', company, position, startDate, endDate);
        
    }

    render() {
        return (
            <div>
                <h2>Step3</h2>
                <div className="card">
                    <div className="card-header">
                        <h4>Work experience</h4>
                    </div>
                    <div className="card-body">
                        <InputField
                            ref={(e) => { this.company = e; }}
                            label="Company name"
                            tabIndex="1"
                        />
                        <InputField
                            ref={(e) => { this.position = e; }}
                            label="Position"
                            tabIndex="2"
                        />
                        <InputField
                            ref={(e) => { this.startDate = e; }}
                            label="Start date"
                            tabIndex="3"
                        />
                        <InputField
                            ref={(e) => { this.endDate = e; }}
                            label="End Date"
                            tabIndex="4"
                        />
                        <Button onClick={this.addExperience}>
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

export default Step3