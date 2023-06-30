import {countReducer} from "../reducers/countReducer";
import {combineReducers, createStore} from "redux";
import {settingsReducer} from "../reducers/settingsReducer";
import {loadState, saveState} from "../utils/localStorage-util";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  stateForCounter: countReducer,
  stateForSettings: settingsReducer
})

// let preloadedState
// const persistedCount = localStorage.getItem('counter')
// if (persistedCount) {
//   preloadedState = JSON.parse(persistedCount)
// }

export const store = createStore(rootReducer, {stateForSettings: loadState()})

store.subscribe(() => {
  saveState(store.getState().stateForSettings)
})
