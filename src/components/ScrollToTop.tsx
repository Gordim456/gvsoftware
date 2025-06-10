
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Add a small delay to ensure the DOM is ready
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant" // Use "instant" for immediate scroll without animation
      });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return null;
}
