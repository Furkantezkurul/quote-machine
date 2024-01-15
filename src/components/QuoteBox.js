import React, { Component } from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import NewQuoteButton from './NewQuoteButton';
import TweetQuoteButton from './TweetQuoteButton';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuote } from '../Redux/actions/quoteAction.js';
import $ from 'jquery';


const QuoteBox = () => {
    const { text, author } = useSelector((state) => state.quote);
    const dispatch = useDispatch();
  
    const handleNewQuoteClick = () => {
    console.log("CLICKED");
      dispatch(fetchQuote());
      $('#quote-box').css('opacity', 1);
      const newBackgroundColor = generateRandomPastelColor();
      $('body').css('background-color', newBackgroundColor);
      $('#text').css('color', newBackgroundColor);
      $('#author').css('color', newBackgroundColor);
      $('buttons').css('color', newBackgroundColor);
      $('#new-quote',).css('background-color', newBackgroundColor);
      $('#tweet-quote',).css('background-color', newBackgroundColor);
    };

    function tweetQuote() {
        console.log("TWEET CLICKED");
        const tweetText = encodeURIComponent(text);
        const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
        window.open(twitterUrl, '_blank');
      }

    function generateRandomPastelColor() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = 80;
        const lightness = 70 + Math.random() * 10;
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      }
    
  
    return (
      <div id="quote-box">
        <QuoteText text={text} />
        <QuoteAuthor author={author} />
        <TweetQuoteButton onClick={tweetQuote}/>
        <NewQuoteButton onClick={handleNewQuoteClick} />
      </div>
    );
  };
  
  export default QuoteBox;
  
  