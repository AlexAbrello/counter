import {CounterType, countReducer, incrementCountAC} from "./countReducer";

let startState: CounterType

beforeEach(() => {
  startState = {
    startValue: 0,
    maxValue: 1,
    count: 0,
    disabled: true
  }
})

test('count should be incremented', () => {

  const action = incrementCountAC()
  const endState = countReducer(startState, action)

  expect(endState.count).toBe(1)
})