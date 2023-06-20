import { useState, useEffect } from "react";
import { useScrollPosition } from "./useScrollPosition";

export const useComponentViewCheck = (elementId: string) => {
  const [inView, setInView] = useState(false);
  const { scrollPosition } = useScrollPosition();
  const checkInView = () => {
    const element = document.querySelector(`#${elementId}`) as HTMLElement;
    const clientHeight = element.getBoundingClientRect().y;
    if (clientHeight <= scrollPosition) {
      setInView(true);
    } else {
      setInView(false);
    }
  };
  useEffect(() => {
    checkInView();
  }, [scrollPosition]);

  return { inView };
};
