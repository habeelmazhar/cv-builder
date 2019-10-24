import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';

import Step1 from './wizard-steps/step1';
import Step2 from './wizard-steps/step2';
import Step3 from './wizard-steps/step3';
import Step4 from './wizard-steps/step4';

// CSS
import './create.css';

class CreateCV extends Component {
    constructor(props) {
        super(props);

        this.onStepChange = this.onStepChange.bind(this);
    }

    onStepChange(e) {
        console.log('e: ', e);

    }

    render() {
        return (
            <div>
                <h2>Create CV</h2>

                <div className="row">
                    <div className="col-12 col-md-5">
                        <StepWizard onStepChange={this.onStepChange}>
                            <Step1 />
                            <Step2 />
                            <Step3 />
                            <Step4 />
                        </StepWizard>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCV