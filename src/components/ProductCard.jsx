import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function ProductCardToGridView({ product }) {
  return (
    <Link to={"/products/" + product.id} className="product-card">
      <img src={product.image}></img>
      <h3>{product.title}</h3>
      <p>
        {product.rating.rate} ({product.rating.count})
      </p>
      <p>${product.price}</p>
    </Link>
  );
}

export function ProductCardToListView({ product }) {
  return (
    <Link to={"/products/" + product.id} className="product-card">
      <img src={product.image}></img>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <button>Delete</button>
    </Link>
  );
}

ProductCardToGridView.propTypes = {
  product: PropTypes.object,
};

ProductCardToListView.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
};
