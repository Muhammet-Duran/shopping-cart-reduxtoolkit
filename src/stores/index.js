import { configureStore } from "@reduxjs/toolkit";
import productsSlice, { productsFetch } from "../features/productsSlice";
import { productsApi } from "features/productsApi";

const store = configureStore({
  reducer: {
    productsSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());

export default store;
