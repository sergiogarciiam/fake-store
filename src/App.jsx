import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to={"/"}>Fake Store</Link>
        </li>
        <li>
          <Link to={"products"}>Products</Link>
        </li>
        <li>
          <Link to={"cart"}>Cart</Link>
        </li>
      </ul>

      <Outlet></Outlet>
    </header>
  );
}

export default App;
