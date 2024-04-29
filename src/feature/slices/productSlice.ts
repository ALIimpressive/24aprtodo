import { createSlice } from "@reduxjs/toolkit";

interface IInitial {
}

const initialState: IInitial = {
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {

  },
});

export const { } = productSlice.actions;
export default productSlice.reducer;
