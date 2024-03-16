import {useEffect, useState} from "react";

/**
 * This is a custom hook that can be used to get the scrollY position and direction
 */
const useScroll = () => {
  const [scrollDirection, setScrollDirection] = useState("noscroll");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
  const handleScroll = () => {
    setPreviousScrollPosition(scrollPosition);
    setScrollPosition(window.scrollY);
    setScrollDirection(
      window.scrollY > previousScrollPosition ? "down" : "up"
    );
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, previousScrollPosition]);

  return { scrollPosition, previousScrollPosition, scrollDirection };
}

export default useScroll;
