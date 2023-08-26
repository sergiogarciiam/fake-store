import { Link, Outlet, useLocation } from "react-router-dom";
import { useActiveLink } from "./utils/useActiveLink";

function App() {
  const location = useLocation();
  const activeLink = useActiveLink(location);

  return (
    <header className="header">
      <ul>
        <li>
          <Link to={"/"} className={activeLink === "/" ? "active" : ""}>
            Fake Store
          </Link>
        </li>
        <li>
          <Link
            to={"products"}
            className={activeLink.includes("/products") ? "active" : ""}
          >
            Products
          </Link>
        </li>
        <li>
          <Link to={"cart"} className={activeLink === "/cart" ? "active" : ""}>
            Cart
          </Link>
        </li>
      </ul>

      <Outlet></Outlet>
    </header>
  );
}

export default App;
