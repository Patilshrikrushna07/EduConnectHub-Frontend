import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import OutgoingMsg from "./OutgoingMsg";
import IncomingMsg from "./IncomingMsg";
import SendMsg from "./SendMsg";
import defaultImage from "../../public/defaultImage.png";
import { userDetailsStore } from "@/store/userDetailsStore";

const UserChatList = ({ data,setMessages,messages }) => {
  const userDetails = userDetailsStore((state) => state.userDetails);
  const chatContainerRef = useRef(null);
  console.log("msg", messages);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="w-full md:h-[500px]">
      <div className="sticky top-0 mt-1 md:mt-0">
        <div className="p-2 h-14 flex w-full bg-opacity-50 backdrop-blur-lg inset-0 bg-gray-200">
          <Image
            className=" rounded-full"
            src={data.image_name ? data.image_name : defaultImage}
            alt="Slide 1"
            width={40}
            height={12}
          />
          <div className="flex-1 ml-2">
            <p className="text-black font-bold cursor-pointer">
              {data.fname} {data.lname}
            </p>
            <p className="text-xs text-gray-400 font-medium">
              Founder & CEO of EduBlog
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-white left-0 right-0"
        style={{ maxHeight: "calc(70vh - 1rem)", overflowY: "scroll" }}
      >
        {messages.map((message, index) =>
          message.sender.id === userDetails.id ? (
            <OutgoingMsg key={index} message={message} />
          ) : (
            <IncomingMsg key={index} message={message} />
          )
        )}
      </div>
      <div className="sticky bottom-2 ">
        <div className="w-full flex bg-white h-12 border-t border-black-400 p-1">
          <SendMsg
            messages={messages}
            setMessages={setMessages}
            user={data}
          />
        </div>
      </div>
    </div>
  );
};

export default UserChatList;
