import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeExperience } from '../actions';

class experienceItem extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.ckey + 1}</td>
                <td>{this.props.experience.company}</td>
                <td>{this.props.experience.position}</td>
                <td>{this.props.experience.startDate}</td>
                <td>{this.props.experience.endDate}</td>
                <td><button className="btn btn-danger" onClick={() => this.props.removeExperience(this.props.ckey)}>X</button></td>
            </tr>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    removeExperience: i => dispatch(removeExperience(i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(experienceItem)