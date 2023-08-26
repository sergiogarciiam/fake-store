import { useProduct } from "../utils/useProducts";
import ProductCard from "./ProductCard";

function Home() {
  const { data, error, loading } = useProduct(
    "https://fakestoreapi.com/products/1"
  );

  if (error) return <p>{error}</p>;
  if (loading) return null;

  return (
    <div className="home">
      <h1>Our Top Products</h1>
      <section aria-label="Top Products Section">
        <ProductCard product={data}></ProductCard>
        <ProductCard product={data}></ProductCard>
        <ProductCard product={data}></ProductCard>
      </section>
      <p>
        By{" "}
        <a href="https://github.com/sergiogarciiam" target="__blank">
          Sergio García
        </a>
      </p>
    </div>
  );
}

export default Home;
