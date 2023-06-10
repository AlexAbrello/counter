export type SettingsType = {
  startValue: number
  maxValue: number
}

const initialState: SettingsType = {
  startValue: 0,
  maxValue: 1,
}

export const settingsReducer = (state: SettingsType = initialState, action: RootCountReducerType): SettingsType => {
  switch (action.type) {
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
    default:
      return state
  }
}

type RootCountReducerType = SetOnStartValueType | SetOnMaxValueType

type SetOnStartValueType = ReturnType<typeof setOnStartValueAC>
type SetOnMaxValueType = ReturnType<typeof setOnMaxValueAC>

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
