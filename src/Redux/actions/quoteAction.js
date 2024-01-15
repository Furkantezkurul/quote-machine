export const FETCH_QUOTE = 'FETCH_QUOTE';

export const fetchQuote = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const { content, author } = data;
    console.log(content);

    dispatch({
      type: FETCH_QUOTE,
      payload: { content, author },
      
    })
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
};