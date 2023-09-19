import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Menu } from "./StyledComponents/Menu";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Edubloglogo from "../public/edublogs-logo-vector.svg";
import { getCookie, setCookie ,removeCookies} from "cookies-next";
import { LogOutPath, ProfilePath } from "@/constants/pathConstants";

function Header() {
  const navRef = useRef();
  const [url, setUrl] = useState("/");
  const id = "/";
  const auth_token = getCookie("authToken");
  console.log(auth_token);
  const [showMenu, setShowMenu] = useState(false);

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
        <div
          className="flex md:mr-32 mr-4"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <MdNotifications className="text-3xl mr-5 text-black cursor-pointer" />
          <Image
            className="w-8 h-8 rounded-full flex justify-center border border-black cursor-pointer"
            src="https://img.freepik.com/free-psd/horizontal-youtube-banner-home-furniture-online-shop_23-2149047881.jpg"
            alt="Slide 1"
            width={0}
            height={0}
          />
          {showMenu && (
            <div className="before:top-0 before:bottom-0 before:left-0 before:right-0 cursor-default ">
              <div className="grid gap-3 p-4 absolute top-16 md:top-16 right-0 w-28 bg-white shadow-md rounded-md md:mr-32 mr-1">
                <a href={"/" + ProfilePath} className="block">
                  <p className="text-base font-medium text-black">
                    My Profile
                  </p>
                </a>
                <hr />
                <div
                  className="block md:cursor-pointer"
                  onClick={() => {
                    window.location.href = `/${LogOutPath}`;
                  }}
                >
                  <p className="text-base font-medium  text-black">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex md:mr-32 mr-4">
          <Link
            className="w-20 h-8 rounded-lg text-white flex font-bold justify-center bg-blue-600 cursor-pointer items-center"
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
