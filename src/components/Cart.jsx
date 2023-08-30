import { useLocalStorage } from "../utils/useLocalStorage";
import { ProductCardToListView } from "./ProductCard";

function Cart() {
  const { cart, deleteProduct } = useLocalStorage();

  return (
    <div className="cart">
      <div className="products-container">
        {Object.keys(cart.data).map((key) => {
          return (
            <ProductCardToListView
              key={key}
              product={cart.data[key]}
              deleteProduct={deleteProduct}
            ></ProductCardToListView>
          );
        })}
      </div>

      <p className="subtotal">
        Subtotal ({cart.number} items): <strong>${cart.price}</strong>
      </p>
    </div>
  );
}

export default Cart;
