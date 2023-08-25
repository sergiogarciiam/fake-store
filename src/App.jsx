import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Header</h1>
      <ul>
        <li>
          <Link to={"/"}>Header</Link>
        </li>
        <li>
          <Link to={"products"}>Products</Link>
        </li>
        <li>
          <Link to={"Cart"}>Cart</Link>
        </li>
      </ul>

      <Outlet></Outlet>
    </>
  );
}

export default App;
