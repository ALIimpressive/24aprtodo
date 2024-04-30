import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchingAllProducts } from "../../feature/actionCreators";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { product, isLoading, error } = useAppSelector((s) => s.money);
  console.log(product);
  

  useEffect(() => {
    dispatch(fetchingAllProducts());
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default Home;
