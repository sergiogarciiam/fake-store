import { useLocalStorage } from "../utils/useLocalStorage";
import { ProductCardToListView } from "./ProductCard";

function Cart() {
  const { cart, deleteProduct } = useLocalStorage();

  const data = Object.keys(cart.data);
  return (
    <div className="cart">
      {data.length !== 0 ? (
        <>
          <div className="products-container">
            {data.map((key) => {
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
        </>
      ) : (
        <h2 className="empty-cart">Cart is empty!</h2>
      )}
    </div>
  );
}

export default Cart;
