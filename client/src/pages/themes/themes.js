import React, { Component } from 'react';
import { connect } from "react-redux";


import { allThemesUpdate, selectTheme } from '../../actions';
import * as selectors from "../../selectors";

import Card from '../../components/card';
import Button from '../../components/button';

import { API } from '../../services';
import config from '../../config/config';

import { toast } from 'react-toastify';
import ejs from '../../../node_modules/ejs/ejs'
import renderHTML from 'react-render-html';

class Themes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            html: ""
        }
        this.handleSelectTheme = this.handleSelectTheme.bind(this);

    }
    componentDidMount() {
        if (!this.props.theme)
            toast.info("Select a theme for live preview.", {
                position: toast.POSITION.TOP_RIGHT
            });
        API.getAllThemes().then(res => {
            let data = res.data;
            console.log('data: ', data.data);

            this.props.allThemesUpdate(data.data);

            // API.getTheme(data.data).then(res => {
            //     let data = res.data;
            //     console.log(data)
            // })
        });

        console.log(this.props.theme)

        if (this.props.theme)
            this.handleSelectTheme(this.props.theme);
    }


    handleSelectTheme(theme) {
        this.props.selectTheme(theme);

        API.getTheme(theme).then(res => {
            let data = res.data;
            this.setState({ html: data });
            console.log(data)
        })
    }

    render() {
        if (this.state.html)
            return (
                <div>
                    <div className="section-header">
                        <h5>Live preview</h5>
                        <div className="ml-auto pt-2">
                            <Button onClick={() => this.setState({ html: '' })}>
                                Change
                            </Button>

                        </div>
                    </div>
                    <div style={{ flex: 1, flexDirection: 'column', alignContent: 'middle', height: '600px', overflow: 'hidden' }}>
                        <div style={{ backgroundColor: 'white', transform: "scale(0.4)", "transform-origin": "0 0" }}>
                            {renderHTML(ejs ? ejs.render(this.state.html, { draft: this.props.draft }) : 'not working')}
                        </div>
                    </div>
                </div>
            )
        return (
            <div>
                <Card title='Select theme'>
                    <div className="row">
                        {this.props.themes.map(theme => {
                            return (
                                <div className="col-lg-4" key={theme} onClick={() => this.handleSelectTheme(theme)}>
                                    <Card title={theme}>
                                        <div style={{boxShadow: '4px 4px 13px #DDDDDD'}}>
                                        <img alt="theme" src={config.THEMEPATH + theme + '.png'} width={200} />
                                        </div>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </Card>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    themes: selectors.selectThemes(state),
    draft: selectors.selectUserDraft(state),
    theme: selectors.selectUserDraftTheme(state)
});

const mapDispatchToProps = dispatch => ({
    allThemesUpdate: data => dispatch(allThemesUpdate(data)),
    selectTheme: name => dispatch(selectTheme(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Themes)