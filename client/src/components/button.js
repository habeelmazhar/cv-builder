import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Button extends PureComponent {

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
                <button
                    onClick={this.props.onClick}
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                    tabIndex={this.props.tabIndex}>
                    {this.props.children}
                </button>
            </div>
        );
    }
}

export default Button;
