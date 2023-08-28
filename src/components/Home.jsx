import { Link } from "react-router-dom";
import { useStore } from "../utils/useStore";

function Home() {
  const { data, error, loading } = useStore(
    "https://fakestoreapi.com/products/categories/"
  );

  if (error) return <p>{error}</p>;
  if (loading) return null;

  return (
    <div className="home">
      <h1>What are you looking for?</h1>
      <ul>
        {data.map((category) => {
          return (
            <li key={category}>
              <Link to="/products">{category}</Link>
            </li>
          );
        })}
        <li>
          <Link to="/products">Explore All</Link>
        </li>
      </ul>
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
