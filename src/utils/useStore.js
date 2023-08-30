import { useEffect, useState } from "react";

export function useStore(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url, { mode: "cors" })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        setError("server error, " + error);
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
}
