import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useShowHeader = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [prevScrollPos, setPrev] = useState(window.pageYOffset);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);
  //resets window pos on nav

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsTop(currentScrollPos < 150);
      setShowHeader(prevScrollPos > currentScrollPos);
      setPrev(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, [prevScrollPos, showHeader]);

  return { showHeader, isTop };
};

export default useShowHeader;
