import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Admin from "./Pages/Admin/Admin.tsx";
import Home from "./components/Home/Home.tsx";
import Basket from "./Pages/Basket/Basket.tsx";
import { Provider } from "react-redux";
import { setupStore } from "./app/store.ts";

const router = createBrowserRouter([
  { path: "/admin", element: <Admin /> },
  { path: "/", element: <Home /> },
  { path: "/basket", element: <Basket /> },
]);
const store = setupStore();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
