import React, { Component } from 'react';

const TweetQuoteButton = ({onClick}) =>  {
  
    return (
      <a id="tweet-quote" onClick={onClick}>
        Tweet Quote
      </a>
    );
  }


export default TweetQuoteButton;