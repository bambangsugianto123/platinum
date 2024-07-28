import apiSlice from "./apiSlice";

const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Order"],
    }),

    getOrderById: builder.query({
      query: (id) => ({
        url: `/order/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["Order"],
    }),

    putOrderById: builder.mutation({
      query: (data) => ({
        url: `/order/${data.id}/slip`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderByIdQuery,
  usePutOrderByIdMutation,
} = orderApi;
