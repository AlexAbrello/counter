import {countReducer} from "../reducers/countReducer";
import {combineReducers, createStore} from "redux";
import {settingsReducer} from "../reducers/settingsReducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  stateForCounter: countReducer,
  stateForSettings: settingsReducer
})

let preloadedState
const persistedCount = localStorage.getItem('counter')
if (persistedCount) {
  preloadedState = JSON.parse(persistedCount)
}

export const store = createStore(rootReducer, {stateForSettings: preloadedState})

store.subscribe(() => {
  localStorage.setItem('counter', JSON.stringify(store.getState().stateForSettings))
})
