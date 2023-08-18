import ChatList from "@/Components/Chat/ChatList";
import ChatSelectMessage from "@/Components/Chat/ChatSelectMessage";
import UserChatList from "@/Components/Chat/UserChatList";
import ChildLayout from "@/Components/Layout/ChildLayout";
import PostCard from "@/Components/Posts/PostCard";
import ProfileCard from "@/Components/Profile/ProfileCard";
import HomeSlider from "@/Components/Slider/Slider";
import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { TbMessageCirclePlus } from "react-icons/tb";

const index = () => {
  return (
    <ChildLayout>
      <div className="md:flex bg-white rounded-lg ">
      <div className="">
          <ChatList/>
        </div>

          <UserChatList/>
        {/* <div className="flex justify-center items-center ml-4">
          <ChatSelectMessage/>
        </div> */}
      </div>
    </ChildLayout>
  );
};

export default index;
