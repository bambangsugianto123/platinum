import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderAPI from "./order-api";

export const postOrder = createAsyncThunk(
  "customer/order",
  async ({ start_rent_at, finish_rent_at, car_id }, thunkAPI) => {
    try {
      const response = await orderAPI.postOrder(
        start_rent_at,
        finish_rent_at,
        car_id
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getOrder = createAsyncThunk(
  "customer/getOrder",
  async ({ id }, thunkAPI) => {
    try {
      const response = await orderAPI.getOrder(id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const uploadSlip = createAsyncThunk(
  "customer/uploadSlip",
  async ({ id }, thunkAPI) => {
    try {
      const response = await orderAPI.uploadSlip(id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "customer/deleteOrder",
  async ({ id }, thunkAPI) => {
    try {
      const response = await orderAPI.deleteOrder(id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const listOrder = createAsyncThunk(
  "customer/listOrder",
  async ({ id }, thunkAPI) => {
    try {
      const response = await orderAPI.listOrder(id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {
  order: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.fulfilled, (state, action) => {
        state.getOrder = action.payload;
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.order = null;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.order = action.payload;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.order = null;
      })
      .addCase(uploadSlip.fulfilled, (state, action) => {
        state.order = action.payload;
      })
      .addCase(uploadSlip.rejected, (state, action) => {
        state.order = null;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.order = action.payload;
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.order = null;
      })
      .addCase(listOrder.fulfilled, (state, action) => {
        state.order = action.payload;
      })
      .addCase(listOrder.rejected, (state, action) => {
        state.order = null;
      });
  },
});

const { reducer } = orderSlice;
export default reducer;
