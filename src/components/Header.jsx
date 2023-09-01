import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function Header({ cart }) {
  return (
    <ul className="header">
      <li>
        <Link to={"/fake-store"} className={"title-link"}>
          Fake Store
        </Link>
      </li>
      <li>
        <Link to={"/fake-store/products"} className={"products-link"}>
          Products
        </Link>
      </li>
      <li>
        <Link to={"/fake-store/cart"} className={"cart-link"}>
          Cart ({cart.number})
        </Link>
      </li>
    </ul>
  );
}

Header.propTypes = {
  cart: PropTypes.object,
};

export default Header;
