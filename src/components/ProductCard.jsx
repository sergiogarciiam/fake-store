import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function ProductCardToGridView({ product }) {
  return (
    <Link to={"/products/" + product.id} className="product-card-grid">
      <img src={product.image}></img>
      <h3>{product.title}</h3>
      <p>{product.rating.rate} ★</p>
      <p>({product.rating.count})</p>
      <p>${product.price}</p>
    </Link>
  );
}

export function ProductCardToListView({ product, deleteProduct }) {
  return (
    <div className="product-card-list">
      <Link to={"/products/" + product.id}>
        <img src={product.image}></img>
      </Link>
      <Link to={"/products/" + product.id}> {product.title}</Link>

      <p>${product.price}</p>

      <p>Quantity: {product.quantity}</p>

      <button onClick={() => deleteProduct(product)}>Delete</button>
    </div>
  );
}

ProductCardToGridView.propTypes = {
  product: PropTypes.object,
};

ProductCardToListView.propTypes = {
  product: PropTypes.object,
  deleteProduct: PropTypes.func,
};
