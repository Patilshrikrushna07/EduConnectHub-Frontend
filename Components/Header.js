import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Menu } from "./StyledComponents/Menu";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

function Header() {
  const navRef = useRef();
  const [url,setUrl]=useState("/");
  const id="/";

  return (
    <header className={`flex items-center justify-between h-[70px] bg-white  md:text-white text-black w-full fixed z-50 border border-b-black-400 ${id==="/messages" ? "hidden md:flex" : "flex" }`}>
      <div className=" text-black  ml-2">EduBlog</div>
      <div className="flex items-center justify-center relative">
        {/* <Link href="/search">
                  <div className="md:hidden absolute top-0 bottom-0 right-0 left-0 bg-transparent z-40"></div>
                </Link> */}
        <BsSearch className="absolute left-4 text-gray-400" />
        <input
          className="border-2 w-full rounded-lg h-10 px-4 py-3 pl-9 outline-none text-black"
          type="text"

          placeholder="Search"
          id="seachBar"
          autoComplete="off"
        />
      </div>
      <div>
        <MdNotifications className="text-3xl mr-4 text-black " />
      </div>
    </header>
  );
}

export default Header;
