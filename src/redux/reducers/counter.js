import {
  COUNT_INCREMENT,
  COUNT_DECREMENT,
  COUNT_LOAD_BEGIN,
  COUNT_LOAD_SUCCESS,
  COUNT_LOAD_ERROR,
} from '../actions';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNT_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case COUNT_LOAD_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case COUNT_LOAD_SUCCESS:
      return {
        ...state,
        count: action.counter,
        loading: false,
      };
    case COUNT_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
