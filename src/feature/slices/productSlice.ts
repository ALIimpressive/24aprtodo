import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../../types";

interface IInitial {
  product: IProducts[];
  isLoading: boolean;
  error: string;
}

const initialState: IInitial = {
  product: [],
  isLoading: false,
  error: "",
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    fetchingProducts: (state) => {
      state.isLoading = true;
    },
    fetchingProductsSuccsess: (state, action: PayloadAction<IProducts[]>) => {
      state.isLoading = false;
      state.product = action.payload;
      state.error = "";
    },
    fetchingProductsError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  fetchingProducts,
  fetchingProductsError,
  fetchingProductsSuccsess,
} = productSlice.actions;
export default productSlice.reducer;



