import {countReducer} from "../reducers/countReducer";
import {combineReducers, createStore} from "redux";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  counter: countReducer,
})

export const store = createStore(rootReducer)
