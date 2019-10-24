import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../../actions'
import * as selectors from "../../../selectors";

import InputField from '../../../components/input-field';
import Button from '../../../components/button';

class Step1 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h2>Step1</h2>
                <div className="card">
                    <div className="card-header">
                        <h4>Basic Info</h4>
                    </div>
                    <div className="card-body">
                        <InputField
                            ref={(e) => { this.email = e; }}
                            label="Email"
                            type="email"
                            tabIndex="1"
                        />
                        <InputField
                            ref={(e) => { this.firstname = e; }}
                            label="First name"
                            tabIndex="2"
                        />
                        <InputField
                            ref={(e) => { this.lastname = e; }}
                            label="Last name"
                            tabIndex="3"
                        />
                        <InputField
                            ref={(e) => { this.linkedin = e; }}
                            label="LinkedIn"
                            tabIndex="4"
                        />
                        <InputField
                            ref={(e) => { this.phone = e; }}
                            label="Phone"
                            tabIndex="5"
                        />
                        <InputField
                            ref={(e) => { this.address = e; }}
                            label="Address"
                            tabIndex="6"
                        />
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
    emailDefault: selectors.selectUserEmail(state),
    firstnameDefault: selectors.selectUserFirstname(state),
    lastnameDefault: selectors.selectUserLastname(state),

    email: selectors.selectUserNewEmail(state),
    firstname: selectors.selectUserNewFirstname(state),
    lastname: selectors.selectUserNewLastname(state),
    linkedin: selectors.selectUserNewLinkedin(state),
    phone: selectors.selectUserNewPhone(state),
    address: selectors.selectUserNewAddress(state),
});

const mapDispatchToProps = dispatch => ({
    login: userId => dispatch(login(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Step1)