import React, { Component } from 'react';
import cellFuture from '../logic/cellFuture.js';
import './Square.css';
import white from '../white.png'

const EMOJIADDRESSPREFIX = "//cdn.jsdelivr.net/emojione/assets/png/";
const EMOJIADDRESSSUFFIX = ".png";
const RELIEVEDEMOJICODE = "1F600";

class Square extends Component {
  constructor() {
    super();
    this.state = {
      hover: false
    };
  }

  emojiAddress(emojiCode) {
    return EMOJIADDRESSPREFIX.concat(
    emojiCode).concat(EMOJIADDRESSSUFFIX);
  }

  mouseOver() {
    this.setState({hover: true});
  }

  mouseOut() {
    this.setState({hover: false});
  }

	render() {
	  var future = this.emojiAddress(cellFuture.properties[this.props.future].emojiCode);
    var present = this.props.isAlive ? this.emojiAddress(RELIEVEDEMOJICODE) : white;
    return (
		  <img
		    className="square"
        alt="square"
        src={this.state.hover ? future : present}
        onClick={this.props.onClick}
        style={{width:32, height:32}}
        onMouseOver={this.mouseOver.bind(this)}
        onMouseOut={this.mouseOut.bind(this)}
      />
    );
	}
}

export default Square;
