import React, { Component } from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import NewQuoteButton from './NewQuoteButton';
import TweetQuoteButton from './TweetQuoteButton';


class QuoteBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "This is a static quote text.",
        author: "John Doe"
      };
    }
  
    render() {
      return (
        <div id="quote-box">
          <QuoteText text={this.state.text} />
          <QuoteAuthor author={this.state.author} />
          <NewQuoteButton />
          <TweetQuoteButton />
        </div>
      );
    }
  }
  
  export default QuoteBox;
  