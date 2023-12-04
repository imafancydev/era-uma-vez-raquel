"use client";

import Lenis from "@studio-freight/lenis";
import React from "react";

const FloatingButton = () => {
  const lenis = new Lenis({
    duration: 2,
  });

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    lenis.scrollTo("#BookSection");
  };

  return (
    <a
      href="#BookSection"
      onClick={handleClick}
      className="fixed w-[64px] h-[64px] top-[80%] left-[calc(50%-32px)] bg-custom-gradient shadow-custom border-none rounded-[50%] flex justify-center items-center cursor-pointer z-[15]"
    >
      <svg
        width="26"
        height="15"
        viewBox="0 0 26 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.44434 1.33334L12.9999 12.8889L24.5554 1.33334"
          stroke="#00A5FF"
          stroke-width="2.64127"
          stroke-linecap="round"
        ></path>
      </svg>
    </a>
  );
};

export default FloatingButton;
