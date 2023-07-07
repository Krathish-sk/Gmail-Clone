import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userValue: null,
    signOutModel: false,
  },
  reducers: {
    signIn: (state, action) => {
      state.userValue = action.payload;
    },
    signOut: (state) => {
      state.userValue = null;
    },
    toggleSignOutModel: (state) => {
      state.signOutModel = !state.signOutModel;
    },
  },
});

export const { signIn, signOut, toggleSignOutModel } = userSlice.actions;
export const selectUser = (state) => state.user.userValue;
export const selectSignOutModel = (state) => state.user.signOutModel;
export default userSlice.reducer;
