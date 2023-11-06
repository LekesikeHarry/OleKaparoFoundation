import { useEffect, useRef, useCallback } from "react";

const useScrollAnimation = () => {
  const highlightedSectionRef = useRef(null);

  const handleScroll = useCallback(() => {
    const highlightedSection = highlightedSectionRef.current;
    const rect = highlightedSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
      highlightedSection.classList.add("animate");
    } else {
      highlightedSection.classList.remove("animate");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return handleScroll;
};

export default useScrollAnimation;
