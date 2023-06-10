export type CounterType = {
  startCount: number
  maxCount: number
  setCount: number
  disabled: boolean
}

const initialState: CounterType = {
  startCount: 0,
  maxCount: 0,
  setCount: 0,
  disabled: true
}

export const countReducer = (state: CounterType = initialState, action: RootCountReducerType): CounterType => {
  switch (action.type) {
    case "INCREMENT-COUNT": {
      return {
        ...state,
        startCount: state.startCount + 1
      }
    }
    case "RESET-COUNT" : {
      return {
        ...state,
        startCount: state.setCount
      }
    }
    case "SET-START-COUNT": {
      return {
        ...state,
        startCount: action.payload.value1,
        maxCount: action.payload.value2,
        setCount: action.payload.value1,
        disabled: false
      }
    }
    default:
      return state
  }
}

type RootCountReducerType = IncrementCountType | ResetCountType | SetStartCountType

type IncrementCountType = ReturnType<typeof incrementCountAC>
type ResetCountType = ReturnType<typeof resetCountAC>
type SetStartCountType = ReturnType<typeof setStartCountAC>

export const incrementCountAC = () => ({type: 'INCREMENT-COUNT'}) as const
export const resetCountAC = () => ({type: 'RESET-COUNT'}) as const
export const setStartCountAC  = (value1: number, value2: number) => ({type: 'SET-START-COUNT', payload: {value1, value2}}) as const

