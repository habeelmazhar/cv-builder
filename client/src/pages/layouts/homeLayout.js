import React from 'react';

import config from '../../config/config';

const HomeLayout = (props) => {
    return (
        <div>
        <div className="navbar-bg"></div>
        <nav className="navbar navbar-expand-lg main-navbar">
            <a href="index.html" className="navbar-brand ">CV Builder</a>

            <div className="ml-auto"></div>
            <ul className="navbar-nav navbar-right">

                <li className="dropdown">
                    <a href="" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                        <img alt="avatar" src={config.IP + "/avatar-1.png"} className="rounded-circle mr-1" />
                        <div className="d-sm-none d-lg-inline-block">Hi, {props.firstname} {props.lastname}</div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a href="/logout" className="dropdown-item has-icon text-danger">
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>

        <div className="main-content">
            <section className="section">
                <div className="section-body">
                    {props.children}
                </div>
            </section>
        </div>


    </div>
    );
};

export default HomeLayout;