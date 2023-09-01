import React from "react";
import ParentsLayout from "./ParentsLayout";
import SideBar from "./SideBar";
import { BiHome, BiRepost } from "react-icons/bi";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { MdNetworkWifi } from "react-icons/md";
import Header from "../Header";
import Link from "next/link";
import Loader from "../Loader";
import { useRouter } from "next/router";

const ChildLayout = ({ children, children1 }) => {
  const router = useRouter();
  const isLoading = router.route !== router.asPath;
  console.log(isLoading);
  return (
    <>
      <Header />
      <main className="flex bg-[#e8e9ee] ">
        {isLoading && <Loader />}
        <div className="">
          <SideBar />
        </div>
        <div className="w-screen md:mr-14 md:mt-24 mt-16 md:ml-6">
          {children}
        </div>
        <div className="fixed bottom-0 left-0 w-full flex bg-white h-14 p-4 gap-18 items-center md:hidden border border-t-black-400">
          <Link href={"messages"} className="flex-1 text-3xl">
            <div className="flex justify-center items-center">
              <BiHome />
            </div>
          </Link>
          <Link href={"messages"} className="flex-1 text-3xl">
            <div className="flex justify-center items-center">
              <BiRepost />
            </div>
          </Link>
          <Link href={"messages"} className="flex-1 text-3xl">
            <div className="flex justify-center items-center">
              <MdNetworkWifi />
            </div>
          </Link>
          <Link href={"messages"} className="flex-1 text-3xl">
            <div className="flex justify-center items-center">
              <BsFillChatLeftDotsFill />
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default ChildLayout;
