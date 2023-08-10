import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Menu } from "./StyledComponents/Menu";


function Header() {
  const navRef = useRef();
  return (
    <header className="flex items-center justify-between h-[80px] md:bg-[#F15A59]  md:text-white text-black w-full fixed z-50">
      <span className="text-[30px] font-bold">Logo</span>
        <Menu href="/#">Home</Menu>
        <Menu href="/#">Work</Menu>
        <Menu href="/#">Blog</Menu>

    </header>
  );
}

export default Header;

