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
        <Link
          to={"/"}
          className={activeLink === "/" ? "title-link active" : "title-link"}
        >
          Fake Store
        </Link>
      </li>
      <li>
        <Link
          to={"products"}
          className={
            activeLink.includes("/products")
              ? "products-link active"
              : "products-link"
          }
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          to={"cart"}
          className={activeLink === "/cart" ? "cart-link active" : "cart-link"}
        >
          Cart ({cart.number})
        </Link>
      </li>
    </ul>
  );
}

export default Header;
