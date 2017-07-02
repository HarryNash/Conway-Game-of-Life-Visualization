import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button className="button" onClick={this.props.onClick}>
        {this.props.display}
      </button>
    );
  }
}

export default Button;
