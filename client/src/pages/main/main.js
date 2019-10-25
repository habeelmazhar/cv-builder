import React, { Component } from 'react';
import { connect } from 'react-redux';

import { } from '../../actions';
import * as selectors from "../../selectors";

import Button from "../../components/button";
import Resume from "../../components/resume-item";

// CSS
import './main.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit() {
        this.props.history.push('/create');
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <section className="section">
                    <div className="section-header">
                        <h1>CV Builder</h1>
                    </div>
                    <Button onClick={() => this.props.history.push('/create')}>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)