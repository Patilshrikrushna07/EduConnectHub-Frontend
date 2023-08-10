import Image from "next/image";
import React from "react";
import { BiPlus } from "react-icons/bi";

const PostCard = () => {
  return (
    <div className="bg-white w-auto rounded-lg h-auto">
      <div className="p-4 flex">
        <Image
          className="w-12 h-12 rounded-full"
          src="https://img.freepik.com/free-psd/horizontal-youtube-banner-home-furniture-online-shop_23-2149047881.jpg"
          alt="Slide 1"
          width={0}
          height={0}
        />
        <div className="flex-1 ml-3">
          <p className="text-black font-medium cursor-pointer hover:underline hover:text-blue-500">
            Shrikrushna Patil
          </p>
          <p className="text-xs">Founder & CEO of EduBlog</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <BiPlus className="font-extrabold text-blue-500 text-lg" />
          <span className="text-base font-bold text-blue-500">Follow</span>
        </div>
      </div>
      <div className="p-4">
        <p className="line-clamp-4">
          Lists: Imagine a shopping list where you can write down items one
          after another. It keeps the order of things and allows you to have
          multiple types of items on the list. Sets: Think of a set like a
          collection of toys. Each toy is unique, and you don't have duplicates.
          You can use sets to quickly find out which toys you have in common
          with your friend.
        </p>
      </div>
      {/* <div>
      <Image
          className="w-12 h-12 rounded-full"
          src="https://media.licdn.com/dms/image/D4D22AQEiWZd_U91_fA/feedshare-shrink_800/0/1691552364561?e=1694649600&v=beta&t=OlrZk2yP8PezYTcxdKHrkrPGoWKs45BUzA_TkY_FRLM"
          alt="Slide 1"
          width={0}
          height={0}
        />
      </div> */}
    </div>
  );
};

export default PostCard;
