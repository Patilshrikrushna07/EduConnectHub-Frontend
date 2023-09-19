import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { TbMessageCirclePlus } from "react-icons/tb";
import defaultImage from "../../public/defaultImage.png"
const ChatList = ({setUserChat,data}) => {
  const router = useRouter();
  console.log(data[0]);
  const handleDivClick = (item) => {
    setUserChat(item);
  };
  return (
    <div className="mb-14 md:w-[350px] bg-white  md:h-[500px] h-screen rounded-lg sticky top-0 border-r border-black-500">
      <div className="flex items-center border-b border-black-500 p-3 sticky top-0">
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
      <div className="absolute bg-white  left-0 right-0  md:max-h-[420px] h-full overflow-scroll scrollbar-none">
        {data.map((item, index) => (
          <div className="p-2 pt-4 flex hover:bg-gray-100 cursor-pointer" key={index}  onClick={() => handleDivClick(item)}>
            <Image
              className=" rounded-full"
              src={item.image_name ? item.image_name :defaultImage }
              alt="Image"
              width={50}
              height={15}
            />
            <div className="flex-1 ml-3">
              <p className="text-black font-medium cursor-pointer ">
                {item.fname}{" "}
                {item.lname}
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
