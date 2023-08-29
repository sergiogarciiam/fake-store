import { useParams } from "react-router-dom";
import { useStore } from "../utils/useStore";
import { useState } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

function ProductDetails() {
  const { id } = useParams();
  const { data, error, loading } = useStore(
    `https://fakestoreapi.com/products/${id}`
  );

  const [quantity, setQuantity] = useState(1);
  const { addProducts } = useLocalStorage();

  if (error) return <p>{error}</p>;
  if (loading) return null;

  return (
    <div className="product-details">
      <img src={data.image}></img>
      <h1>{data.title}</h1>

      <section>
        <p>{data.rating.rate}</p>
        <p>({data.rating.count})</p>
      </section>

      <hr></hr>
      <p>${data.price}</p>

      <form>
        <label>Quantity: </label>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 15 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </form>

      <button onClick={() => addProducts(data, parseInt(quantity))}>
        Add to Cart
      </button>

      <hr></hr>
      <section>
        <p>About the product</p>
        <p>{data.description}</p>
      </section>
    </div>
  );
}

export default ProductDetails;
