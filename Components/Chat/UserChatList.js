import Image from "next/image";
import React from "react";
import OutgoingMsg from "./OutgoingMsg";
import IncomingMsg from "./IncomingMsg";

const UserChatList = () => {
  return (
    <div className="w-full ">
      <div className="p-1 h-14 flex w-full bg-opacity-50 backdrop-blur-lg inset-0 bg-gray-200 sticky top-0">
        <Image
          className="w-12 h-12 rounded-full"
          src="https://img.freepik.com/free-psd/horizontal-youtube-banner-home-furniture-online-shop_23-2149047881.jpg"
          alt="Slide 1"
          width={0}
          height={0}
        />
        <div className="flex-1 ml-3">
          <p className="text-black font-bold cursor-pointer ">
            Shrikrushna Patil
          </p>
          <p className="text-xs text-gray-400 font-medium">
            Founder & CEO of EduBlog
          </p>
        </div>
      </div>
      <div className="overflow-y-scroll max-h-[430px] bg-white  left-0 right-0 scrollbar-none">
        <OutgoingMsg />
        {/* <OutgoingMsg/> */}
        <IncomingMsg />
        <OutgoingMsg />
        <IncomingMsg />
        <OutgoingMsg />
        <OutgoingMsg />
        <IncomingMsg />
        <IncomingMsg />
        <OutgoingMsg />
      </div>
      <div className="w-full flex bg-white h-14 border-t border-black-400 p-1">
     <div className="bg-gray-200 w-full rounded-xl ">

     </div>
      </div>
    </div>
  );
};

export default UserChatList;
