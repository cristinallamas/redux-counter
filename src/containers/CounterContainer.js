import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  countIncrement,
  countDecrement,
  counterLoad,
} from '../redux/actions';
import Counter from '../components/Counter';

class CounterContainer extends Component {
  componentDidMount() {
    const { counterLoad } = this.props;
    counterLoad();
  }
  render() {
    const { count, countIncrement, countDecrement } = this.props;
    return (
      <Counter
        count={count}
        decrementHandler={countDecrement}
        incrementHandler={countIncrement}
      />
    );
  }
}
CounterContainer.propTypes = {
  count: PropTypes.number.isRequired,
  countIncrement: PropTypes.func.isRequired,
  countDecrement: PropTypes.func.isRequired,
};

const mapState = state => ({
  count: state.counter.count,
});

const mapDispatch = {
  countIncrement,
  countDecrement,
  counterLoad,
};

export default connect(mapState, mapDispatch)(CounterContainer);
