import Image from "next/image";
import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { TbMessageCirclePlus } from "react-icons/tb";

const ChatList = () => {
  const [memberList, setMemberList] = useState([
    1, 2, 4, 5, 4, 65, 5, 5, 5, 5, 5, 5, 5, 57, 57, 3, 3, 5, 5, 3, 3, 3, 5, 6,
    4, 6, 4, 5, 4, 4, 3, 3,
  ]);
  return (
    <div className="mb-14 md:w-[350px] bg-white  h-[500px] rounded-lg sticky top-0 border-r border-black-500">
      <div className="flex items-center border-b border-black-500 p-3 sticky">
        <div className="flex-1 text-2xl font-medium ">Start Messaging</div>
        <div className="flex gap-3">
          <div className="text-2xl cursor-pointer">
            <AiFillSetting />
          </div>
          <div className="text-2xl cursor-pointer">
            <TbMessageCirclePlus />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative pt-4 p-5">
        <BsSearch className="absolute left-16 text-gray-400" />
        <input
          className="border-2 w-full rounded-full h-10 px-4 py-3 pl-9 outline-none text-black text-center"
          type="text"
          placeholder="Search Direct Messages"
          id="seachBar"
          autoComplete="off"
        />
      </div>
      <div className="absolute bg-white  left-0 right-0  max-h-[420px] overflow-y-scroll scrollbar-none">
        {memberList.map((index, items) => (
          <div className="p-2 pt-4 flex hover:bg-gray-100 cursor-pointer" key={index} >
            <Image
              className="w-12 h-12 rounded-full"
              src="https://img.freepik.com/free-psd/horizontal-youtube-banner-home-furniture-online-shop_23-2149047881.jpg"
              alt="Slide 1"
              width={0}
              height={0}
            />
            <div className="flex-1 ml-3">
              <p className="text-black font-medium cursor-pointer ">
                Shrikrushna Patil
              </p>
              <p className="text-xs text-gray-400 font-medium">
                Founder & CEO of EduBlog
              </p>
            </div>
            <div className="flex items-center cursor-pointer"></div>
            <TbMessageCirclePlus className="text-4xl text-blue-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
