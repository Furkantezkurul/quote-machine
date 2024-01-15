import React, { Component } from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import NewQuoteButton from './NewQuoteButton';
import TweetQuoteButton from './TweetQuoteButton';

class QuoteBox extends Component {
  render() {
    return (
      <div id="quote-box">
        <QuoteText />
        <QuoteAuthor />
        <NewQuoteButton />
        <TweetQuoteButton />
      </div>
    );
  }
}

export default QuoteBox;
