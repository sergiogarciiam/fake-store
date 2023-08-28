import { useStore } from "../utils/useStore";
import ProductCard from "./ProductCard";

function Products() {
  const { data, error, loading } = useStore(
    "https://fakestoreapi.com/products/"
  );

  if (error) return <p>{error}</p>;
  if (loading) return null;

  return (
    <div className="products-container">
      <h1>Products</h1>
      {Object.keys(data).map((key) => {
        return <ProductCard key={key} product={data[key]}></ProductCard>;
      })}
    </div>
  );
}

export default Products;
