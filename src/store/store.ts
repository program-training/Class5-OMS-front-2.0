import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
import themeModeSlice from "../features/themes/themeModeSlice";
import ordersSlice from "../features/orders/ordersSlice";
import tokenSlice from "../features/token/tokenSlice";
import spinnerSlice from "../features/spinner/spinnerSlice";
import axiosInterceptors from "../services/axiosInterceptors";
const rootReducer = combineReducers({
  users: usersSlice,
  themeMode: themeModeSlice,
  orders: ordersSlice,
  token: tokenSlice,
  spinner: spinnerSlice,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      axiosInterceptors
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
