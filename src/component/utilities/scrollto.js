import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import Classes from "./scrollto.module.css";

const ScrollTo = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 3000) {
        console.log(window.scrollY);
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={
        showBtn
          ? Classes.scrolltop
          : [Classes.scrolltop, Classes.showscrolltop].join(" ")
      }
      onClick={scrollTop}
    >
      {showBtn && (
        <div>
          Scroll Top
          <FaAngleUp />
        </div>
      )}
    </div>
  );
};

export default ScrollTo;
