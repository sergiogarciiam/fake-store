import { useLocalStorage } from "../utils/useLocalStorage";
import { ProductCardToListView } from "./ProductCard";

function Cart() {
  const { cart, deleteProduct } = useLocalStorage();

  const data = Object.keys(cart.data);
  return (
    <div className="cart">
      <div className="products-container">
        {data.length !== 0 ? (
          data.map((key) => {
            return (
              <ProductCardToListView
                key={key}
                product={cart.data[key]}
                deleteProduct={deleteProduct}
              ></ProductCardToListView>
            );
          })
        ) : (
          <h2>Cart is empty!</h2>
        )}
      </div>

      <p className="subtotal">
        Subtotal ({cart.number} items): <strong>${cart.price}</strong>
      </p>
    </div>
  );
}

export default Cart;
