import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/actions/counter'

const Counter = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  const onIncrease = () => {
    dispatch(increment())
  }

  const onDecrease = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1>React-Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;
