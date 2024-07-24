import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./Feature/Auth/auth-slice";
import messageReducer from "./Feature/Auth/message-slice";
import carsReducer from "./Feature/Cars/cars-slice";
import ordersReducer from "./Feature/Orders/order-slice";

import apiSlice from "./services/redux/apiSlices/apiSlice";
import authSliceReducer from "./services/redux/reducerSlices/authSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,

    message: messageReducer,
    cars: carsReducer,
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
