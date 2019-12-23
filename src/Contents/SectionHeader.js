import React, {Component} from 'react';

class SectionHeader extends Component {

    render() {
        return (
            <div>
                <div className="item-area">
                    <span className="item">
                        <img src={this.props.img} ale={this.props.alt}></img>
                    </span>
                </div>
                <p className="font-s simple-tag"> {this.props.text}</p>
            </div>
        );
    }

}

export default SectionHeader;