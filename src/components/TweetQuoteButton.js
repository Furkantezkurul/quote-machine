import React, { Component } from 'react';

class TweetQuoteButton extends Component {
  render() {
    return (
      <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer">
        Tweet Quote
      </a>
    );
  }
}

export default TweetQuoteButton;