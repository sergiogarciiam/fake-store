import { useEffect, useState } from "react";

export function useProducts(url) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch(() => {
        setError("server error");
        setLoading(false);
      });
  }, [url]);

  return { products, error, loading };
}
