import { useParams } from "react-router-dom";
import { useStore } from "../utils/useStore";
import { ProductCardToGridView } from "./ProductCard";
import CategoriesList from "./CategoriesList";

function Products() {
  const { category } = useParams();
  const link = category ? `category/${category}` : "";

  const { data, error, loading } = useStore(
    `https://fakestoreapi.com/products/${link}`
  );

  if (error) return <p className="error">{error}</p>;
  if (loading) return null;

  return (
    <div className="products">
      <CategoriesList activeCategory={link}></CategoriesList>
      <div className="products-container">
        {Object.keys(data).map((key) => {
          return (
            <ProductCardToGridView
              key={key}
              product={data[key]}
            ></ProductCardToGridView>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
