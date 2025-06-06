
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Add defensive check to ensure we have a valid location
    if (location && location.pathname) {
      window.scrollTo({
        top: 0,
        behavior: "instant" // Use "instant" for immediate scroll without animation
      });
    }
  }, [location?.pathname]);

  return null;
}
