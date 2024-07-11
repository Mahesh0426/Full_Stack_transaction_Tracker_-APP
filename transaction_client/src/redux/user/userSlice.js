// Slice - Used to build State using redux-toolkit
// 1. Inital State
// 2. Reducers

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setIsAuthenticated: (state, action) => {
      const { payload } = action; // destructure action

      state.isAuthenticated = payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// reducer renamed as userReducer for code readabilty
const { reducer: userReducer, actions } = userSlice;

export const { setIsAuthenticated, setUser, setIsLoading } = actions;
export default userReducer;
