import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepWizard from 'react-step-wizard';

import Step1 from './wizard-steps/step1';
import Step2 from './wizard-steps/step2';
import Step3 from './wizard-steps/step3';
import Step4 from './wizard-steps/step4';

import Themes from '../themes/themes';
import HomeLayout from '../layouts/homeLayout';

import * as selectors from "../../selectors";


import { createInstance } from '../../services';
import config from '../../config/config';

// CSS
import './create.css';

class CreateCV extends Component {
  constructor(props) {
    super(props);

    this.onStepChange = this.onStepChange.bind(this);

    let token = window.localStorage.getItem("JWT");
    const headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token };
    createInstance({ baseURL: config.IP, headers });
  }

  componentDidMount() {
  }

  onStepChange(e) {
    console.log('e: ', e);
  }

  render() {
    return (
      <HomeLayout firstname={this.props.firstname} lastname={this.props.lastname}>
        <div className="section-header">
          <h1>Create CV</h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <StepWizard onStepChange={this.onStepChange}>
              <Step1 />
              <Step2 />
              <Step3 />
              <Step4 onFinish={() => { this.props.history.push('/home') }} />
            </StepWizard>
          </div>
          <div className="col-12 col-md-6">
            <Themes />
          </div>
        </div>
      </HomeLayout>
    );
  }
}


const mapStateToProps = state => ({
  firstname: selectors.selectUserFirstname(state),
  lastname: selectors.selectUserLastname(state),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCV)