import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../redux/counterAction';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrementCounter());
    }
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <div>
      <h1>React-Redux Counter App</h1>
      <div>
        <h2>count:{count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
