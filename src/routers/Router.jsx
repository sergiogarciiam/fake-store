import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
      path: "/products",
      element: <Products></Products>,
    },
    {
      path: "/productDetails",
      element: <ProductDetails></ProductDetails>,
    },
    {
      path: "/cart",
      element: <Cart></Cart>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
