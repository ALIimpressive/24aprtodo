import axios from "axios";
import { AppDispatch } from "../../app/store";
import {
  fetchingProducts,
  fetchingProductsError,
  fetchingProductsSuccsess,
} from "../slices/productSlice";
import { IProducts } from "../../types";

export const fetchingAllProducts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchingProducts());
      const response = await axios<IProducts[]>(
        `https://jsonplaceholder.typicode.com/photos`
      );
      dispatch(fetchingProductsSuccsess(response.data));
    } catch (e: any) {
      dispatch(fetchingProductsError(e.message));
    }
  };
};
