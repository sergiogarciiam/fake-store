import { useLocalStorage } from "../utils/useLocalStorage";
import { ProductCardToListView } from "./ProductCard";

function Cart() {
  const { products } = useLocalStorage();

  return (
    <div className="cart">
      {Object.keys(products.data).map((key) => {
        return (
          <ProductCardToListView
            key={key}
            product={products.data[key]}
          ></ProductCardToListView>
        );
      })}
      <p>Subtotal ({products.number} items): $35.5</p>
    </div>
  );
}

export default Cart;
