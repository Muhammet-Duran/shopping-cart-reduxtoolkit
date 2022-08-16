import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "features/productsApi";
import cartSlice, { getTotals } from "features/cartSlice";
const store = configureStore({
  reducer: {
    cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(getTotals());

export default store;
