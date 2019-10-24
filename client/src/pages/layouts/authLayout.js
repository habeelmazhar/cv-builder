import React, { Component } from 'react';

class AuthLayout extends Component {


    render() {
        return (
            <section className="section">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                            <div className="login-brand">
                                <h4>CV Maker</h4>
                            </div>

                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4>{this.props.title}</h4>
                                </div>

                                <div className="card-body">
                                    {this.props.children}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AuthLayout