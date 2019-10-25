import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeExperience } from '../actions';

class experienceItem extends Component {

    render() {
        return (
            <li>
                <span className="float-right" onClick={()=> this.props.removeExperience(this.props.ckey)}>x</span>
                <p>
                    
                    {this.props.experience.company}
                    <br/>
                    {this.props.experience.position}
                    <br/>
                    {this.props.experience.startDate}
                    <br/>
                    {this.props.experience.endDate}
                </p>
            </li>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    removeExperience: i => dispatch(removeExperience(i)),
});

export default connect(mapStateToProps, mapDispatchToProps)(experienceItem)