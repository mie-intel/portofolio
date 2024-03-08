"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    setScrollTop(document.documentElement.scrollTop);
    setScrolling(document.documentElement.scrollTop > scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);
  return (
    <div
      className={`fixed z-[50] bg-[white] aspect-[1280/175] md:aspect-[1280/75] w-full transition-all duration-300 flex flex-row justify-evenly items-center text-[3vw] md:text-[1.5vw] text-fgcolor font-bold px-[2%] md:px-[20%] ${
        scrolling ? "-top-40" : "top-0"
      }`}
    >
      <Link href="#perkenalan" className="hover:text-[#59bada]">
        About Me
      </Link>
      <Link href="#skill" className="hover:text-[#59bada]">
        Skill
      </Link>
      <Link href="#website" className="hover:text-[#59bada]">
        Project
      </Link>
      <Link href="#inovasi" className="hover:text-[#59bada]">
        Inovasi
      </Link>
    </div>
  );
};

export default Navbar;
