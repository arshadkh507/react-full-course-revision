/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
  name: "",
  email: "",
  age: "",
  gender: "",
};

const userDetailSlice = createSlice({
  name: "userDetails",
  initialState: initialState,
  reducers: {
    createPost: (state, action) => {},
    updatePost: (state, action) => {},
    deletePost: (state, action) => {},
    readAllPosts: (state, action) => {},
  },
});

export const { createPost, updatePost, deletePost, readAllPosts } =
  userDetailSlice.actions;
export default userDetailSlice.reducer;
