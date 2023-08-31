import { useOutletContext } from "react-router-dom";
import { ProductCardToListView } from "./ProductCard";

function Cart() {
  const [cart, , deleteProduct] = useOutletContext();

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
          <button className="pay-button" onClick={() => deleteProduct()}>
            Pay
          </button>
        </>
      ) : (
        <h2 className="empty-cart">Cart is empty!</h2>
      )}
    </div>
  );
}

export default Cart;
