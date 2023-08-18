import React from "react";
import ParentsLayout from "./ParentsLayout";
import SideBar from "./SideBar";
import { BiHome, BiRepost } from "react-icons/bi";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { MdNetworkWifi } from "react-icons/md";
import Header from "../Header";
import Link from "next/link";

const ChildLayout = ({ children,children1 }) => {
  return (
    <>
    <Header/>
      <main className="flex bg-[#e8e9ee] ">
        <div className="">
        <SideBar />
        </div>
        <div className="w-screen md:mr-14 md:mt-24 mt-16 md:ml-6">{children}</div>
        <div className="fixed bottom-0 left-0 w-full flex bg-white h-14 p-4 gap-18  items-center md:hidden border border-t-black-400">
          <BiHome className="flex-1 ml-2 text-3xl" />
          <BiRepost className="flex-1 ml-2 text-3xl" />
          <MdNetworkWifi className="flex-1 ml-2 text-3xl" />
          <Link href={"messages"}>
          <BsFillChatLeftDotsFill className="flex-1 ml-2 text-3xl" />
          </Link>
        </div>
      </main>
    </>
  );
};

export default ChildLayout;
