import { useEffect, useState } from "react";

export function useActiveLink(location) {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return activeLink;
}
