export type CounterType = {
  startValue: number
  maxValue: number
  count: number
  disabled: boolean
}

const initialState: CounterType = {
  startValue: 0,
  maxValue: 1,
  count: 0,
  disabled: true
}

export const countReducer = (state: CounterType = initialState, action: RootCountReducerType): CounterType => {
  switch (action.type) {
    case "INCREMENT-COUNT": {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case "RESET-COUNT" : {
      return {
        ...state,
        count: 0
      }
    }
    case "SET-ON-START-VALUE": {
      return {
        ...state,
        startValue: action.payload.value
      }
    }
    default:
      return state
  }
}

type RootCountReducerType = IncrementCountType | ResetCountType | SetOnStartValueType

type IncrementCountType = ReturnType<typeof incrementCountAC>
type ResetCountType = ReturnType<typeof resetCountAC>
type SetOnStartValueType = ReturnType<typeof setOnStartValueAC>

export const incrementCountAC = () => ({type: 'INCREMENT-COUNT'}) as const
export const resetCountAC = () => ({type: 'RESET-COUNT'}) as const
export const setOnStartValueAC  = (value: number) => {
  return {
    type: 'SET-ON-START-VALUE',
    payload: {
      value
    }
  } as const
}
