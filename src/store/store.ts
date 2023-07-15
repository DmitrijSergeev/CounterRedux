import {combineReducers, legacy_createStore} from "redux";
import {incubatorReducer} from "./reducers/incubatorReducer";

const rootReducer = combineReducers({
    students: incubatorReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store