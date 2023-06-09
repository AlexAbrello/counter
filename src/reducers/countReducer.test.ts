import {CounterType, countReducer, incrementCountAC, resetCountAC, setOnStartValueAC} from "./countReducer";

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

test('count should be 0', () => {

  const action = resetCountAC()
  const endState = countReducer(startState, action)

  expect(endState.count).toBe(0)
})

test('startValue should be changed', () => {

  const action = setOnStartValueAC(4)
  const endState = countReducer(startState, action)

  expect(endState.startValue).toBe(4)
})