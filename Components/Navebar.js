import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";
import { Menu } from "./StyledComponents/Menu";


function Navbar() {
  const navRef = useRef();
  return (
    <>
      <header className="flex items-center justify-between h-[80px] px-[2rem] bg-white text-black-500 fixed z-50 w-full mb-[200px]">
        <span className="text-[30px] font-bold">Logo</span>
        <nav
          className="fixed top-0 left-0 h-full w-full flex items-center justify-center flex-col gap-6 text-black-500 transition duration-[1s] translate-y-[-100vh]
                  md:translate-y-0 md:relative md:flex-row md:gap-0 md:justify-end"
        >
          <Menu href="/#">Home</Menu>
          <Menu href="/#">Post</Menu>
          <Menu href="/#">Video</Menu>
          <Menu href="/#">Community</Menu>
          {/* <Menu href="/#">Work</Menu>
          <Menu href="/#">Blog</Menu>
          <Menu href="/#">About</Menu>
          <Menu href="/#">Contact</Menu> */}

          <Menu href="/#" className=""><CiStreamOn style={{fontSize:'2em'}}/></Menu>
          <Menu href="/#">Login</Menu>
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
    </>
  );
}

export default Navbar;
