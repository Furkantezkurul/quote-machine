import { FETCH_QUOTE } from '../actions/quoteAction';

const initialState = {
  text: '"No matter how many times you save the world, it always manages to get back in jeopardy again. Sometimes I just want it to stay saved!"',
  author: '~ Mr Incredible',
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE:
      return {
        ...state,
        text: action.payload.content,
        author: action.payload.author,
      };
    default:
      return state;
  }
};

export default quoteReducer;