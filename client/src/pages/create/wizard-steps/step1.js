import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login, updatePersonalInfo } from '../../../actions'
import * as selectors from "../../../selectors";

import InputField from '../../../components/input-field';
import Button from '../../../components/button';

class Step1 extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        let email = this.email.input.value;
        let firstname = this.firstname.input.value;
        let lastname = this.lastname.input.value;
        let linkedin = this.linkedin.input.value;
        let phone = this.phone.input.value;
        let address = this.address.input.value;

        this.props.updatePersonalInfo({
            email, firstname,lastname,linkedin,phone,address
        })
    }

    render() {
        let email = this.props.email ? this.props.email : this.props.emailDefault;
        let firstname = this.props.firstname ? this.props.firstname : this.props.firstnameDefault;
        let lastname = this.props.lastname ? this.props.lastname : this.props.lastnameDefault;
        let linkedin = this.props.linkedin;
        let phone = this.props.phone;
        let address = this.props.address;

        return (
            <div>
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
                            onChange={this.handleChange}
                            defaultValue={email}
                        />
                        <InputField
                            ref={(e) => { this.firstname = e; }}
                            label="First name"
                            tabIndex="2"
                            onChange={this.handleChange}
                            defaultValue={firstname}
                        />
                        <InputField
                            ref={(e) => { this.lastname = e; }}
                            label="Last name"
                            tabIndex="3"
                            onChange={this.handleChange}
                            defaultValue={lastname}
                        />
                        <InputField
                            ref={(e) => { this.linkedin = e; }}
                            label="LinkedIn"
                            tabIndex="4"
                            onChange={this.handleChange}
                            defaultValue={linkedin}
                        />
                        <InputField
                            ref={(e) => { this.phone = e; }}
                            label="Phone"
                            tabIndex="5"
                            onChange={this.handleChange}
                            defaultValue={phone}
                        />
                        <InputField
                            ref={(e) => { this.address = e; }}
                            label="Address"
                            tabIndex="6"
                            onChange={this.handleChange}
                            defaultValue={address}
                        />
                    </div>
                    <div className="card-footer">
                        {/* <div className="float-left">
                            <Button onClick={this.props.previousStep}>
                                Previous
                            </Button>
                        </div> */}
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
    login: user => dispatch(login(user)),
    updatePersonalInfo: personal => dispatch(updatePersonalInfo(personal)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Step1)