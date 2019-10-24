import React, { Component } from 'react';

// CSS
import './main.css';

class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <a className="waves-effect waves-light btn" onClick={() => this.props.history.push('/create')}>Create new</a>

                <section class="section">
                    <div class="section-header">
                        <h1>Demo</h1>
                    </div>

                    <div class="section-body">
                        <p class="section-lead">
                            CV can be created here
                        </p>

                        <div class="row">
                            <div class="col-12 col-md-5">
                                <div class="card">
                                    <div class="card-header">
                                        <h4>Create assignment</h4>
                                    </div>
                                    <form id="createAssignments" class="needs-validation" novalidate="">
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Select course</label>
                                            </div>
                                            <div class="form-group">
                                                <label>Title</label>
                                                <input type="text" name="title" class="form-control" required="" />

                                            </div>
                                            <div class="form-group">
                                                <label>Deadline</label>
                                                <input type="text" name="deadline" class="form-control datepicker" />
                                            </div>
                                            <div class="form-group">
                                                <label>Description</label>
                                                <input type="text" name="description" class="form-control" required="" />

                                            </div>
                                        </div>
                                        <div class="card-footer text-right">
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Home