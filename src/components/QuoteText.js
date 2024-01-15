import React, { Component } from 'react';

class QuoteText extends Component {
  render() {
    return (
      <div id="text">
        "{this.props.text}"
      </div>
    );
  }
}

export default QuoteText;
