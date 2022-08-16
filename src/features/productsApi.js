import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "./mock/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products.json",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
