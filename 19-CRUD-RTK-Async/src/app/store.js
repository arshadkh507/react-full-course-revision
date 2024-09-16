import { configureStore } from "@reduxjs/toolkit";
import userDetailSliceReducer from "../features/userDetailSlice";

const store = configureStore({
  reducer: {
    user: userDetailSliceReducer,
  },
});

export default store;
