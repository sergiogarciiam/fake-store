import PropTypes from "prop-types";

function ProductCard({ product }) {
  return (
    <section aria-label="product-card" className="product-card">
      <img src={product.image}></img>
      <h3>{product.title}</h3>
      <p>
        {product.rating.rate}({product.rating.count})
      </p>
      <p>{product.price}</p>
    </section>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
