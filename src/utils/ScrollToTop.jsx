import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * This component scrolls the window to the top on every route change.
 * Place it inside your Router component but outside your Routes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

