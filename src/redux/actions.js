import { counterLoadFromAPI } from '../api';

export const COUNT_INCREMENT = 'COUNT_INCREMENT';
export const COUNT_DECREMENT = 'COUNT_DECREMENT';

export const COUNT_LOAD_BEGIN = 'COUNT_LOAD_BEGIN';
export const COUNT_LOAD_SUCCESS = 'COUNT_LOAD_SUCCESS';
export const COUNT_LOAD_ERROR = 'COUNT_LOAD_ERROR';

export const countIncrement = () => ({
  type: COUNT_INCREMENT,
});
export const countDecrement = () => ({
  type: COUNT_DECREMENT,
});

export const counterLoad = () => async dispatch => {
  dispatch({ type: COUNT_LOAD_BEGIN });

  try {
    const counter = await counterLoadFromAPI();
    dispatch({ type: COUNT_LOAD_SUCCESS, counter });
  } catch (error) {
    dispatch({ type: COUNT_LOAD_ERROR, error });
  }
};
