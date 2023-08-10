import React from "react";
import { BiHome, BiRepost } from "react-icons/bi";
import { FiBookOpen } from "react-icons/fi";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { MdNetworkWifi } from "react-icons/md";
import Home from "@/pages";

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
      <div className="md:ml-20 ml-0 p-4 md:bg-gray-200 bg-[#F15A59] hidden md:block mt-20 scrollbar-none justify-between sticky top-0">
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
    </div>
  );
};

export default SideBar;
