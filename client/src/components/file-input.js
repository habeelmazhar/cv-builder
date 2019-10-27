import React, { Component } from 'react';
import { connect } from "react-redux";

import { updateImage } from '../actions';
import * as selectors from "../selectors";

import Resizer from 'react-image-file-resizer';


class FileInput extends Component {
    constructor(props) {
        super(props);

        this.imageUpload = this.imageUpload.bind(this);
    }

    imageUpload = (e) => {
        const file = e.target.files[0];

        var fileInput = false
        if (file) {
            fileInput = true
        }
        if (fileInput) {
            Resizer.imageFileResizer(file, 200, 200, 'JPEG', 70, 0,
                uri => {
                    this.props.updateImage(uri);
                    console.log(uri)
                },
                'base64'
            );
        }

    };

    render() {
        return (
            <input
                type="file"
                id="imageFile"
                name='imageFile'
                onChange={this.imageUpload} />
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    updateImage: image => dispatch(updateImage(image)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FileInput)