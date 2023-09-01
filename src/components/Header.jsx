import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function Header({ cart }) {
  return (
    <ul className="header">
      <li>
        <Link to={"/"} className={"title-link"}>
          Fake Store
        </Link>
      </li>
      <li>
        <Link to={"products"} className={"products-link"}>
          Products
        </Link>
      </li>
      <li>
        <Link to={"cart"} className={"cart-link"}>
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
