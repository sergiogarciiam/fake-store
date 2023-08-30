import { useEffect, useState } from "react";

function getInitial(initialData) {
  let initialNumber = 0;
  let initialPrice = 0;

  Object.keys(initialData).map((key) => {
    initialNumber += initialData[key].quantity;
    initialPrice += initialData[key].price * initialData[key].quantity;
  });

  return { initialNumber, initialPrice };
}

export function useLocalStorage() {
  const initialData = JSON.parse(localStorage.getItem("cart")) || {};
  const { initialNumber, initialPrice } = getInitial(initialData);

  const [cart, setCart] = useState({
    data: initialData,
    number: initialNumber,
    price: initialPrice,
  });

  const addCart = (product, quantity) => {
    setCart({
      data: {
        ...cart.data,
        [product.id]: cart.data[product.id]
          ? {
              ...cart.data[product.id],
              quantity: cart.data[product.id].quantity + quantity,
            }
          : { ...product, quantity: quantity },
      },
      number: cart.number + quantity,
      price: cart.price + product.price * quantity,
    });
  };

  const deleteProduct = (product) => {
    const newCart = {
      ...cart,
      number: cart.number - product.quantity,
      price: cart.price - product.price * product.quantity,
    };
    delete cart.data[product.id];

    setCart(newCart);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart.data));
  }, [cart]);

  return { cart, addCart, deleteProduct };
}
