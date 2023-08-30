import { Link, useLocation } from "react-router-dom";
import { useActiveLink } from "../utils/useActiveLink";
import { useLocalStorage } from "../utils/useLocalStorage";

function Header() {
  const location = useLocation();
  const activeLink = useActiveLink(location);
  const { cart } = useLocalStorage();

  return (
    <ul className="header">
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
          Cart ({cart.number})
        </Link>
      </li>
    </ul>
  );
}

export default Header;
