import { FETCH_QUOTE } from '../actions/quoteAction';

const initialState = {
  content: '',
  author: '',
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE:
      return {
        ...state,
        content: action.payload.content,
        author: action.payload.author,
      };
    default:
      return state;
  }
};

export default quoteReducer;