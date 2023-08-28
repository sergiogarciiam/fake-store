import { Link } from "react-router-dom";
import { useStore } from "../utils/useStore";

function CategoriesList() {
  const { data, error, loading } = useStore(
    "https://fakestoreapi.com/products/categories/"
  );

  if (error) return <p>{error}</p>;
  if (loading) return null;

  return (
    <ul className="categories-container">
      <li>
        <Link to="/products">all</Link>
      </li>

      {data.map((category) => {
        return (
          <li key={category}>
            <Link to={"/products/category/" + category}>{category}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoriesList;
