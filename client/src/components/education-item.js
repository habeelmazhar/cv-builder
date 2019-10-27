import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeEducation } from '../actions';

class educationItem extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.ckey + 1}</td>
                <td>{this.props.education.institute}</td>
                <td>{this.props.education.course}</td>
                <td>{this.props.education.grade}</td>
                <td>{this.props.education.year}</td>
                <td><a href="#" class="btn btn-danger" onClick={() => this.props.removeEducation(this.props.ckey)}>X</a></td>
            </tr>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    removeEducation: i => dispatch(removeEducation(i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(educationItem)