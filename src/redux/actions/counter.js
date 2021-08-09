import { INCREMENT, DECREMENT } from './types';

// action 생성 함수
export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

export const initialState = {
  count: 0
}