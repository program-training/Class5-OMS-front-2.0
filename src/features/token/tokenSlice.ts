import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import UserInterface from "../users/interfaces/UserInterface";

interface InitialState {
  token: string;
  user: Record<string, unknown>;
  rememberMe: boolean;
}

const initialState: InitialState = {
  token: "",
  user: {},
  rememberMe: false,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<UserInterface>) => {
      state.user = { ...state.user, ...action.payload };
    },
    setRememberMe: (state, action: PayloadAction<boolean>) => {
      state.rememberMe = action.payload;
    },
  },
  // extraReducers(builder) {
  //   builder.addCase();
  // },
});

export const { setToken, setRememberMe } = tokenSlice.actions;
export default tokenSlice.reducer;
