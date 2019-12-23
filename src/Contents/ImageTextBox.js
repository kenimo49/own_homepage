import React, {Component} from 'react';
import pepper from "../static/img/pepper.png";

import './Contents.css'

class ImageTextBox extends Component {

    render() {
        return (
            <div className={(this.props.center ? "image-block" : "image-block image-block-center")}>
                <p className="image-name">{this.props.name}</p>
                <img src={this.props.img} alt={this.props.name}></img>
                <p className="font-s">{this.props.text}</p>
            </div>
        );
    }

}

export default ImageTextBox;