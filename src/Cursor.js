import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const ref = useRef(null);

  useEffect(() => {
    const mouseOnScreen = (e) => {
      ref.current.style.cssText = `
        top: ${e.pageY}px; 
        left: ${e.pageX}px; 
        display: block;
      `;
      clearTimeout(ref.current.timeout);
      ref.current.timeout = setTimeout(() => {
        ref.current.style.display = "none";
      }, 1000);
    };

    const mouseOutScreen = () => {
      ref.current.style.display = "none";
    };

    document.addEventListener("mousemove", mouseOnScreen);
    document.addEventListener("mouseout", mouseOutScreen);

    return () => {
      document.removeEventListener("mousemove", mouseOnScreen);
      document.removeEventListener("mouseout", mouseOutScreen);
    };
  }, []);

  return <div className="cursor" ref={ref}></div>;
};

export default CustomCursor;
