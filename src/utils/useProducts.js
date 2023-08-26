import { useEffect, useState } from "react";

const LINK = "https://fakestoreapi.com";

export function useIndividualProduct() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${LINK}/products/1`)
      .then((response) => {
        if (response === "400") throw new Error("server error");
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => setError(error));
  }, []);

  return [product, error];
}
