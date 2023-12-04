import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import UserInterface from "./interfaces/UserInterface";

interface InitialState {
  users: [];
  loggedUser: UserInterface | Record<string, unknown>;
  isAdmin: boolean;
}

const initialState: InitialState = {
  users: [],
  loggedUser: {},
  isAdmin: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<[]>) => {
      state.users = action.payload;
    },
    setLoggedUser: (state, action: PayloadAction<UserInterface>) => {
      state.loggedUser = { ...state.loggedUser, ...action.payload };
    },
    setIsAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { setUsers, setLoggedUser, setIsAdmin } = usersSlice.actions;
export default usersSlice.reducer;
