import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import modesReducer from "./modes";

const rootReducer = combineReducers({
  modes: modesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
