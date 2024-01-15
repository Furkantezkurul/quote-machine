import React, { Component } from 'react';

class QuoteAuthor extends Component {
  render() {
    return (
      <div id="author">
        ~ {this.props.author}
      </div>
    );
  }
}

export default QuoteAuthor;
