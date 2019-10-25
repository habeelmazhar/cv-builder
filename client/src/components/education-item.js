import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeEducation } from '../actions';

class educationItem extends Component {

    render() {
        return (
            <li>
                <span className="float-right" onClick={()=> this.props.removeEducation(this.props.ckey)}>x</span>
                <p>
                    {this.props.education.institute}
                    <br />
                    {this.props.education.course}
                    <br />
                    {this.props.education.grade}
                    <br />
                    {this.props.education.year}
                </p>
            </li>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    removeEducation: i => dispatch(removeEducation(i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(educationItem)