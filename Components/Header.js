import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Menu } from "./StyledComponents/Menu";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Edubloglogo from "../public/edublogs-logo-vector.svg";
import { getCookie, setCookie } from "cookies-next";

function Header() {
  const navRef = useRef();
  const [url, setUrl] = useState("/");
  const id = "/";
  const auth_token = getCookie("authToken");
  console.log(auth_token);

  return (
    <header
      className={`flex items-center justify-between h-[70px] bg-white  md:text-white text-black w-full fixed z-50 border border-b-black-400 ${
        id === "/messages" ? "hidden md:flex" : "flex"
      }`}
    >
      <Image
        className="justify-start md:w-28 md:h-28 md:p-2 w-28 md:ml-28 md:flex hidden"
        src={Edubloglogo}
        alt="Slide 1"
        width={10}
        height={10}
      />
      <div className="flex items-center relative ml-3">
        {/* <Link href="/search">
                  <div className="md:hidden absolute top-0 bottom-0 right-0 left-0 bg-transparent z-40"></div>
                </Link> */}
        <BsSearch className="absolute left-4 text-gray-400" />
        <input
          className="border-2 md:w-72 w-full rounded-lg h-10 px-4 py-3 pl-9 outline-none text-black"
          type="text"
          placeholder="Search"
          id="seachBar"
          autoComplete="off"
        />
      </div>
      {auth_token ? (
        <div className="flex md:mr-32 mr-4">
          <MdNotifications className="text-3xl mr-5 text-black cursor-pointer" />
          <Image
            className="w-8 h-8 rounded-full flex justify-center border border-black cursor-pointer"
            src="https://img.freepik.com/free-psd/horizontal-youtube-banner-home-furniture-online-shop_23-2149047881.jpg"
            alt="Slide 1"
            width={0}
            height={0}
          />
        </div>
      ) : (
        <div className="flex md:mr-32 mr-4">
          <Link
            className="w-20 h-8 rounded-sm flex justify-center bg-blue-400 cursor-pointer items-center"
            href="/login"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
