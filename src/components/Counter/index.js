import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count, incrementHandler, decrementHandler }) => {
  return (
    <div>
      {count}

      <button onClick={incrementHandler} type="button">
        +
      </button>
      <button onClick={decrementHandler} type="button">
        -
      </button>
    </div>
  );
};
Counter.propTypes = {
  count: PropTypes.number.isRequired,
  incrementHandler: PropTypes.func.isRequired,
  decrementHandler: PropTypes.func.isRequired,
};

Counter.defaultProps = { incrementHandler: [], decrementHandler: [] };
export default Counter;
