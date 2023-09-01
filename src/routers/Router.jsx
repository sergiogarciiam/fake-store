import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../components/Home";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/fake-store",
      element: <App></App>,
      children: [
        {
          path: "/fake-store",
          element: <Home></Home>,
        },
        {
          path: "/fake-store/products",
          element: <Products></Products>,
        },
        {
          path: "/fake-store/products/category/:category",
          element: <Products></Products>,
        },
        {
          path: "/fake-store/products/:id",
          element: <ProductDetails></ProductDetails>,
        },
        {
          path: "/fake-store/cart",
          element: <Cart></Cart>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
