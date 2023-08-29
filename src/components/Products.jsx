import { useParams } from "react-router-dom";
import { useStore } from "../utils/useStore";
import { ProductCardToGridView } from "./ProductCard";
import CategoriesList from "./CategoriesList";

function Products() {
  let { category } = useParams();
  category = category ? `category/${category}` : "";

  const { data, error, loading } = useStore(
    `https://fakestoreapi.com/products/${category}`
  );

  if (error) return <p>{error}</p>;
  if (loading) return null;

  return (
    <div className="products-container">
      <h1>Products {category}</h1>
      <CategoriesList></CategoriesList>
      {Object.keys(data).map((key) => {
        return (
          <ProductCardToGridView
            key={key}
            product={data[key]}
          ></ProductCardToGridView>
        );
      })}
    </div>
  );
}

export default Products;
