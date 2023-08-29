import { useEffect, useState } from "react";

function getInitialNumber(initialData) {
  let number = 0;
  Object.keys(initialData).map((key) => {
    number += initialData[key];
  });

  return number;
}

export function useLocalStorage() {
  const initialData = JSON.parse(localStorage.getItem("products")) || {};
  const initialNumber = getInitialNumber(initialData);

  const [products, setProducts] = useState({
    data: initialData,
    number: initialNumber,
  });

  const addProducts = (id, quantity) => {
    setProducts({
      data: {
        ...products.data,
        [id]: products.data[id] ? products.data[id] + quantity : quantity,
      },
      number: products.number + quantity,
    });
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products.data));
  }, [products]);

  return { products, addProducts };
}
