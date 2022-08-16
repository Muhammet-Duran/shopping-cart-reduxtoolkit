import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductList } from "api";
const initialState = {
  items: [],
  status: null,
};
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const data = await getProductList();
    return data;
    // const response = await getProductList();
    // console.log(response.data);
    // return response.data;
  }
);
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fullfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

// export const {} = productsSlice.actions;
export default productsSlice.reducer;
