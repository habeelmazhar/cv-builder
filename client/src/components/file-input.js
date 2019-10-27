import React, { Component } from 'react';
import { connect } from "react-redux";

import { updateImage } from '../actions';

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
            <div>
                <div className="card-header pl-0 pt-5">
                    <h4>Photo - Optional</h4>
                </div>
                <input
                    type="file"
                    id="imageFile"
                    name='imageFile'
                    onChange={this.imageUpload} />
            </div>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    updateImage: image => dispatch(updateImage(image)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FileInput)