import { Link, useLocation } from "react-router-dom";
import { useActiveLink } from "../utils/useActiveLink";

function Header() {
  const location = useLocation();
  const activeLink = useActiveLink(location);

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
          Cart
        </Link>
      </li>
    </ul>
  );
}

export default Header;
