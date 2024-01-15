import React, { Component } from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import NewQuoteButton from './NewQuoteButton';
import TweetQuoteButton from './TweetQuoteButton';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuote } from '../Redux/actions/quoteAction.js';



const QuoteBox = () => {
    const { text, author } = useSelector((state) => state.quote);
    const dispatch = useDispatch();
  
    const handleNewQuoteClick = () => {
    console.log("CLICKED");
      dispatch(fetchQuote());
    };
  
    return (
      <div id="quote-box">
        <QuoteText text={text} />
        <QuoteAuthor author={author} />
        <TweetQuoteButton />
        <NewQuoteButton onClick={handleNewQuoteClick} />
      </div>
    );
  };
  
  export default QuoteBox;
  
  