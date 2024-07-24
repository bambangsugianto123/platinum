import apiSlice from "./apiSlice";

const carApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (params) => ({
        url: "/v2/car",
        params: { ...params },
      }),
      transformResponse: async (response) => {
        // await new Promise((resolve) => setTimeout(resolve, 1500));

        // console.log(response);
        const transformedCars = response.cars.map((car) => ({
          id: car.id,
          category: car.category || "Medium",
          createdAt: car.createdAt,
          finish_rent_at: car.finish_rent_at,
          image:
            car.image ||
            `https://loremflickr.com/200/100/car/?random=${car.id}`,
          name: car.name || "Mobil",
          price: car.price || 100000,
          start_rent_at: car.start_rent_at,
          status: car.status,
          updatedAt: car.updatedAt,
        }));
        return {
          ...response,
          cars: transformedCars,
        };
      },
      providesTags: ["Cars"],
    }),
    getCarById: builder.query({
      query: (id) => ({
        url: `/v2/car/${id}`,
      }),
      transformResponse: async (response) => {
        // await new Promise((resolve) => setTimeout(resolve, 1500));

        // console.log(response);
        const transformedCars = {
          ...response,
          category: response.category || "Medium",
          image:
            response.image ||
            `https://loremflickr.com/200/100/car/?random=${response.id}`,
          start_rent_at: response.start_rent_at,
          finish_rent_at: response.finish_rent_at,
          status: response.status,
          updatedAt: response.updatedAt,
          createdAt: response.createdAt,
        };
        return transformedCars;
      },
      providesTags: ["Cars"],
    }),
  }),
});

export const { useGetCarsQuery, useGetCarByIdQuery } = carApi;
