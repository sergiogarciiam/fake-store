import { useLocalStorage } from "../utils/useLocalStorage";
import { ProductCardToListView } from "./ProductCard";

function Cart() {
  const { cart } = useLocalStorage();

  return (
    <div className="cart">
      {Object.keys(cart.data).map((key) => {
        return (
          <ProductCardToListView
            key={key}
            product={cart.data[key]}
          ></ProductCardToListView>
        );
      })}
      <p>
        Subtotal ({cart.number} items): ${cart.price}
      </p>
    </div>
  );
}

export default Cart;
