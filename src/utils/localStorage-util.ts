import {SettingsType} from "../reducers/settingsReducer";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('counter')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export const saveState = (state: SettingsType) => {
  const serializedState = JSON.stringify(state)
  localStorage.setItem('counter', serializedState)
}