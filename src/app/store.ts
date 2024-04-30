import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "../feature/slices/productSlice";

const rootReducer = combineReducers({
  money: productSlice,
});

const API = "https://jsonplaceholder.typicode.com/photos";

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type rootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
