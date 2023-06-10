import {countReducer} from "../reducers/countReducer";
import {combineReducers, createStore} from "redux";
import {settingsReducer} from "../reducers/settingsReducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  stateForCounter: countReducer,
  stateForSettings: settingsReducer
})

export const store = createStore(rootReducer)
