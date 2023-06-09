import {
  CounterType,
  countReducer,
  incrementCountAC,
  resetCountAC,
  setOnMaxValueAC,
  setOnStartValueAC, setStartCountAC
} from "./countReducer";

let startState: CounterType

beforeEach(() => {
  startState = {
    startValue: 1,
    maxValue: 2,
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

test('maxtValue should be changed', () => {

  const action = setOnMaxValueAC(6)
  const endState = countReducer(startState, action)

  expect(endState.maxValue).toBe(6)
})

test('set startValue', () => {

  const action = setStartCountAC()
  const endState = countReducer(startState, action)

  expect(endState.count).toBe(1)
  expect(endState.disabled).toBe(false)
})