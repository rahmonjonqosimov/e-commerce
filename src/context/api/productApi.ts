import {
    CreateProductSchema,
    getProductByIdSchema,
    ProductQueryParams,
    ProductsSchema,
  } from "../types";
  import apiSlice from "./api";
  
  const extendedApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
      getProducts: build.query<any, ProductQueryParams>({
        query: ({ url, ...params }) => ({
          url: `products${url}`,
          params,
        }),
        providesTags: ["Products"],
      }),
      getProductById: build.query<ProductsSchema, getProductByIdSchema>({
        query: (id) => ({
          url: `products/${id}`,
        }),
        providesTags: ["Products"],
      }),
      deleteProduct: build.mutation<{ success: boolean; id: string }, number>({
        query: (postId) => ({
          url: `books/${postId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Products"],
      }),
      updateProduct: build.mutation<ProductsSchema, Partial<ProductsSchema>>({
        query: (updatedPost) => ({
          url: `books/${updatedPost.id}`,
          method: "PUT",
          body: updatedPost,
        }),
        invalidatesTags: ["Products"],
      }),
      createProduct: build.mutation<
        CreateProductSchema,
        Partial<CreateProductSchema>>({
        query: (newPost) => ({
          url: "books",
          method: "POST",
          body: newPost,
        }),
        invalidatesTags: ["Products"],
      }),
    }),
    overrideExisting: false,
  });
  
  export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useDeleteProductMutation,
    useUpdateProductMutation,
  } = extendedApi;