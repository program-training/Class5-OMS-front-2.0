import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  themeMode: boolean;
}

const initialState: InitialState = {
  themeMode: false,
};

export const themeModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<boolean>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setThemeMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;
