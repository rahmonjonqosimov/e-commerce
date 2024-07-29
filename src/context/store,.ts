import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api/api";
// import wishlistSlice from "./slice/heartSlice";
// import cartSlice from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    // heart: wishlistSlice,
    // cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;