import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Menu } from "./StyledComponents/Menu";


function Header() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("translate-y-0");
  };
  return (
    <header className="flex items-center justify-between h-[80px] px-[2rem] bg-[#F15A59] text-white border-b-2">
      <span className="text-[30px] font-bold">Logo</span>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 h-full w-full flex items-center justify-center flex-col gap-6 bg-[#F15A59] transition duration-[1s] translate-y-[-100vh]
                  md:translate-y-0 md:relative md:flex-row md:gap-0 md:justify-end"
      >
        <Menu href="/#">Home</Menu>
        <Menu href="/#">Work</Menu>
        <Menu href="/#">Blog</Menu>
        <Menu href="/#">About</Menu>
        <Menu href="/#">Contact</Menu>
        <button
          className="absolute top-8 right-8  md:p-[5px] md:hidden"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className="md:p-[5px] md:hidden" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;

