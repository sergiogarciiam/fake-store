import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { useStore } from "../utils/useStore";

function CategoriesList({ activeCategory = "none" }) {
  const { data, error, loading } = useStore(
    "https://fakestoreapi.com/products/categories/"
  );

  if (error) return <p className="error">{error}</p>;
  if (loading) return null;

  activeCategory = activeCategory === "none" ? "none" : activeCategory.slice(9);

  return (
    <ul className="categories-container">
      <li>
        <Link to="/products" className={activeCategory === "" ? "active" : ""}>
          all
        </Link>
      </li>

      {data.map((category) => {
        return (
          <li key={category}>
            <Link
              to={"/products/category/" + category}
              className={category === activeCategory ? "active" : ""}
            >
              {category}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

CategoriesList.propTypes = {
  activeCategory: PropTypes.string,
};

export default CategoriesList;
