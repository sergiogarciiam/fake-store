import { useOutletContext, useParams, Link } from "react-router-dom";
import { useStore } from "../utils/useStore";
import { useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const { data, error, loading } = useStore(
    `https://fakestoreapi.com/products/${id}`
  );

  const [quantity, setQuantity] = useState(1);
  const [, addProduct] = useOutletContext();

  const handleAddProduct = (e) => {
    addProduct(data, parseInt(quantity));
    e.target.className = "active";
    setTimeout(() => {
      e.target.className = "";
    }, 400);
  };

  if (error) return <p className="error">{error}</p>;
  if (loading) return null;

  return (
    <div className="product-details">
      <img src={data.image}></img>
      <div className="information">
        <h2>{data.title}</h2>

        <section className="rating">
          <p>
            {data.rating.rate} {"★".repeat(data.rating.rate)}
          </p>
          <p>{data.rating.count} ratings</p>
        </section>

        <hr></hr>

        <p className="price">${data.price}</p>

        <form>
          <label>Quantity: </label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {Array.from({ length: 15 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </form>

        <button onClick={handleAddProduct}>Add to Cart</button>

        <hr></hr>

        <section className="description">
          <h3>About this product</h3>
          <p>{data.description}</p>
        </section>
      </div>
      <Link to="/products" className="back-to-store">
        Back to Store
      </Link>
    </div>
  );
}

export default ProductDetails;
