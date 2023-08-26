import { useProducts } from "../utils/useProducts";
import ProductCard from "./ProductCard";

function Products() {
  const { products, error, loading } = useProducts(
    "https://fakestoreapi.com/products/"
  );

  if (error) return <p>{error}</p>;
  if (loading) return null;

  return (
    <div className="products-container">
      <h1>Products</h1>
      {Object.keys(products).map((key) => {
        return <ProductCard key={key} product={products[key]}></ProductCard>;
      })}
    </div>
  );
}

export default Products;
