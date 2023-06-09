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
    case "SET-ON-MAX-VALUE": {
      return {
        ...state,
        maxValue: action.payload.value
      }
    }
    case "SET-START-COUNT": {
      return {
        ...state,
        count: state.startValue,
        disabled: false
      }
    }
    default:
      return state
  }
}

type RootCountReducerType = IncrementCountType | ResetCountType | SetOnStartValueType | SetOnMaxValueType | SetStartCountType

type IncrementCountType = ReturnType<typeof incrementCountAC>
type ResetCountType = ReturnType<typeof resetCountAC>
type SetOnStartValueType = ReturnType<typeof setOnStartValueAC>
type SetOnMaxValueType = ReturnType<typeof setOnMaxValueAC>
type SetStartCountType = ReturnType<typeof setStartCountAC>

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
export const setOnMaxValueAC  = (value: number) => {
  return {
    type: 'SET-ON-MAX-VALUE',
    payload: {
      value
    }
  } as const
}
export const setStartCountAC  = () => ({type: 'SET-START-COUNT'}) as const
