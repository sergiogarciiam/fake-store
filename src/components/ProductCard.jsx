import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={"/products/" + product.id} className="product-card">
      <img src={product.image}></img>
      <h3>{product.title}</h3>
      <p>
        {product.rating.rate}({product.rating.count})
      </p>
      <p>{product.price}</p>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
