import React from "react";
import { BiHome, BiRepost } from "react-icons/bi";
import { FiBookOpen } from "react-icons/fi";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { MdNetworkWifi } from "react-icons/md";
import Home from "@/pages";
import Link from "next/link";

const SideBar = () => {
  let sidebarValues = [
    {
      value: "Home",
      icon: <BiHome />,
    },
    {
      value: "Education",
      icon: <FiBookOpen />,
    },
    {
      value: "Qwetyt",
      icon: <BiRepost />,
    },
    {
      value: "Community",
      icon: <BsFillChatLeftDotsFill />,
    },
    {
      value: "Work",
      icon: <MdNetworkWifi />,
    },
    {
      value: "BLog",
      icon: <FiBookOpen />,
    },
    {
      value: "Exy",
      icon: <MdNetworkWifi />,
    },
  ];

  return (
      <div className="md:ml-20 ml-0 p-4 hidden md:block mt-20 scrollbar-none justify-between sticky top-0">
        <div className="rounded-full bg-orange-500 w-60 h-14 mt-2 items-center justify-center hidden md:flex">
          <span className="text-xl text-white font-medium">Add a Blog</span>
        </div>
        {sidebarValues.map((item, index) => {
          return (
            <div key={index}>
              <div className="text-centre md:pt-5 pt-0 flex items-center ">
                <div
                  className={`hover:bg-white ${
                    item.value == "Home" ? "bg-white" : "bg-none"
                  }  w-52 h-10 rounded-lg p-1 flex gap-2 items-center `}
                >
                  <div className="flex1 ml-2 text-xl">{item?.icon}</div>
                  <span
                    className={`text-xl ${
                      item.value == "Home" ? "font-bold" : "font-medium"
                    } hover:font-bold rounded-full `}
                  >
                    {item.value}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
<div className="bg-gray-300 h-[1px]  mr-5 mt-2  blur-0 "></div>
        <div className="mt-5 space-x-3 text-xs text-blue-400 cursor-pointer">
          <Link className="hover:text-black" href={""}>About .</Link>
          <Link className="hover:text-black" href={""}>Accessibility. </Link>
          <Link className="hover:text-black" href={""}>Help Center. </Link>
          <Link className="hover:text-black" href={""}>Privacy & Terms. </Link>
          <Link className="hover:text-black" href={""}>Ad Choices. </Link>
          <br/>
          <Link className="hover:text-black" href={""}>App Lunching Soon</Link>
          </div>
          <span className="text-xs text-gray-600 font-bold">
            Copyright@ 2023 - EduBlog
          </span>
          <p className="text-xs text-gray-600 mt-1 font-bold">
            All Rights Reserved
          </p>
    </div>
  );
};

export default SideBar;
