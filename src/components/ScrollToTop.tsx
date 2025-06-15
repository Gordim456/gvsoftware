
import * as React from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // Use "instant" for immediate scroll without animation
    });
  }, [pathname]);

  return null;
}
