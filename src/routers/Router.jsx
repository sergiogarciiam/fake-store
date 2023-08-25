import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../components/Home";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/products",
          element: <Products></Products>,
          children: [
            {
              path: "/products/:id",
              element: <ProductDetails></ProductDetails>,
            },
          ],
        },
        {
          path: "/productDetails",
          element: <ProductDetails></ProductDetails>,
        },
        {
          path: "/cart",
          element: <Cart></Cart>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
