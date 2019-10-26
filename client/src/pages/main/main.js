import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateAllResume, clearDraft } from '../../actions';
import * as selectors from "../../selectors";

import Button from "../../components/button";
import Resume from "../../components/resume-item";

import { API, createInstance } from '../../services';

import config from '../../config/config';

// CSS
import './main.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.handleEdit = this.handleEdit.bind(this);
        this.handleCreateNew = this.handleCreateNew.bind(this);
    }

    handleEdit() {
        this.props.history.push('/create');
    }

    handleCreateNew() {
        this.props.clearDraft();
        this.props.history.push('/create');
    }

    componentDidMount() {
        let token = window.localStorage.getItem("JWT");
        const headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token };
        createInstance({ baseURL: config.IP, headers });

        if (token) {
            API.getAllResume().then((res) => {
                let data = res.data;
                if (data.status === 'success') {
                    console.log(data.data)
                    this.props.updateAllResume(data.data);
                }
            })
        }
    }

    render() {
        return (
            <div>
                <section className="section">
                    <div className="section-header">
                        <h1>CV Builder</h1>
                    </div>
                    <Button onClick={this.handleCreateNew}>
                        Create new
                    </Button>
                    <div className="section-body">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>My CVs</h4>
                                    </div>
                                    <div className="card-body">
                                        {this.props.resumes.map((resume, i) => <Resume key={i} ckey={i} title={resume.personal.email} handleEdit={this.handleEdit} />)}
                                    </div>
                                    <div className="card-footer text-right">
                                        {/* <button type="button" className="btn btn-primary">Save</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    resumes: selectors.selectUserResume(state),
});

const mapDispatchToProps = dispatch => ({
    updateAllResume: data => dispatch(updateAllResume(data)),
    clearDraft: () => dispatch(clearDraft())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)