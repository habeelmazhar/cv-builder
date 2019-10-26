import React, { Component } from 'react';
import { connect } from "react-redux";


import { allThemesUpdate, selectTheme } from '../../actions';
import * as selectors from "../../selectors";

import Card from '../../components/card';

import { API } from '../../services';

import config from '../../config/config';


import ejs from '../../../node_modules/ejs/ejs'

import renderHTML from 'react-render-html';


const THEMEPATH = config.IP + '/themes/';
class Themes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            html: ""
        }
        this.handleSelectTheme = this.handleSelectTheme.bind(this);
    }
    componentDidMount() {

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
                    {renderHTML(ejs ? ejs.render(this.state.html, { draft: this.props.draft }) : 'not working')}
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
                                        <img src={THEMEPATH + theme + '.png'} width={200} />
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </Card>
                <h1>{this.props.themes}</h1>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    themes: selectors.selectThemes(state),
    draft: selectors.selectUserDraft(state)
});

const mapDispatchToProps = dispatch => ({
    allThemesUpdate: data => dispatch(allThemesUpdate(data)),
    selectTheme: name => dispatch(selectTheme(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Themes)