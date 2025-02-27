import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  'https://api-car-rental.binaracademy.org/customer'

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-car-rental.binaracademy.org/customer",
    prepareHeaders: (headers) => {
      const userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        const { access_token } = JSON.parse(userInfo);
        if (access_token) {
          headers.set("access_token", `${access_token}`);
        }
      }
      return headers;
    },
  }),
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});

export default apiSlice;
