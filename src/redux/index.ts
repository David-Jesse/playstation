import { combineReducers } from "@reduxjs/toolkit";
import AppReducer from "./App/index";

// Assert that AppReducer is a valid reducer for the app
const rootReducer = combineReducers({
    app: AppReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;