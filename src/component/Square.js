import React, { Component } from 'react';
import cellFuture from '../logic/cellFuture.js';
import './Square.css';
import white from '../white.png'

const EMOJIADDRESSPREFIX = "//cdn.jsdelivr.net/emojione/assets/png/";
const EMOJIADDRESSSUFFIX = ".png";

class Square extends Component {
	render() {

	var addr = EMOJIADDRESSPREFIX.concat(
    cellFuture.properties[this.props.future].emojiCode).concat(
    EMOJIADDRESSSUFFIX);
    if (this.props.future === cellFuture.STAYDEAD) {
    	addr = white;
    }
	return (
		<img
		className="square"
      	alt="square"
      	src={addr}
      	onClick={this.props.onClick}
      	style={{width:32, height:32}}
      	>
        </img>
        );
	}
}







//src={EMOJIADDRESSPREFIX.concat(cellFuture.properties[this.props.future].emojiCode).concat(EMOJIADDRESSSUFFIX)}

export default Square;