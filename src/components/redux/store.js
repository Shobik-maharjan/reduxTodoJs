import {
  configureStore,
  createStore,
  legacy_createStore,
} from "@reduxjs/toolkit";
import rootReducer from "../redux/reducers/index";

// const store = createstore(rootReducer);

const store = configureStore({ reducer: rootReducer });
export default store;
