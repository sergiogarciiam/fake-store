import { useEffect, useState } from "react";

export function useProduct(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError("server error");
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
}
