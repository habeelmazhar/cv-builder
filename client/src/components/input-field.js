import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class InputField extends PureComponent {

    static propTypes = {
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        label: PropTypes.string,
        defaultValue: PropTypes.string,
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <input ref={(e) => { this.input = e; }}
                    id={this.props.label} 
                    type={this.props.type ? this.props.type :'text'} 
                    tabIndex={this.props.tabIndex} 
                    onChange={this.props.onChange}
                    disabled={this.props.disabled}
                    defaultValue={this.props.defaultValue}
                    className="form-control" 
                />
                {/* <div className="invalid-feedback">Please fill in your email</div> */}
            </div>
        );
    }
}

export default InputField;
