import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editResume, deleteResume } from '../actions';
import { selectUserResume } from "../selectors";

import { API } from '../services';

class resumeItem extends Component {
    constructor(props) {
        super(props);

        this.editResume = this.editResume.bind(this);
        this.deleteResume = this.deleteResume.bind(this);

    }

    editResume() {
        this.props.editResume(
            this.props.resumes[this.props.ckey]
        );
        this.props.handleEdit();
    }

    deleteResume() {
        let id = this.props.resumes[this.props.ckey]._id

        this.props.deleteResume(this.props.ckey);
        
        API.deleteResume(id).then((res)=>{
            let data = res.data;
            if(data.status === 'success')
                alert('successfully deleted')
        });
    }

    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <button type="button" className="btn btn-danger" onClick={this.deleteResume}>Delete</button>
                <button type="button" className="btn btn-primary" onClick={this.editResume}>Edit</button>
                <button type="button" className="btn btn-default">View</button>

            </div>
        );
    }
}


const mapStateToProps = state => ({
    resumes: selectUserResume(state)
});

const mapDispatchToProps = dispatch => ({
    editResume: i => dispatch(editResume(i)),
    deleteResume: i => dispatch(deleteResume(i))
});

export default connect(mapStateToProps, mapDispatchToProps)(resumeItem)