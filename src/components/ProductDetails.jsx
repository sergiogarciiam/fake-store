import { useParams } from "react-router-dom";
import { useProducts } from "../utils/useProducts";

function ProductDetails() {
  const { id } = useParams();
  const { products, error, loading } = useProducts(
    `https://fakestoreapi.com/products/${id}`
  );

  if (error) return <p>{error}</p>;
  if (loading) return null;

  return (
    <div className="product-details">
      <h1>{products.title}</h1>
    </div>
  );
}

export default ProductDetails;
