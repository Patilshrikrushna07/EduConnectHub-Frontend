import Image from "next/image";
import React from "react";
import { BiPlus, BiRepost } from "react-icons/bi";
import LikeImage from "../../public/like.svg";
import SaveImage from "../../public/save.svg";
import UseFull from "../../public/usefull.svg";
import { MdNetworkWifi } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";
import { PiShareFatThin } from "react-icons/pi";

const PostCard = () => {
  return (
    <div className="bg-white w-auto md:rounded-lg h-auto mb-4 ">
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
          <p className="text-xs text-gray-400 font-medium">
            Founder & CEO of EduBlog
          </p>
        </div>
        <div className="flex items-center cursor-pointer">
          <BiPlus className="font-extrabold text-blue-500 text-lg" />
          <span className="text-base font-bold text-blue-500">Follow</span>
        </div>
      </div>
      <div className="ml-4 mr-4">
        <p className="line-clamp-4 text-base">
          Lists: Imagine a shopping list where you can write down items one
          after another. It keeps the order of things and allows you to have
          multiple types of items on the list. Sets: Think of a set like a
          collection of toys. Each toy is unique, and you don&apos;t have
          duplicates. You can use sets to quickly find out which toys you have
          in common with your friend.
        </p>
      </div>
      <div className="p-4 rounded-xl">
        <Image
          className="w-full h-full rounded-xl"
          src="https://soliloquywp.com/wp-content/uploads/2016/08/11-Website-Slider-Best-Practices-That-You-Must-Follow.png"
          alt="Slide 1"
          width={0}
          height={0}
        />
      </div>
      <div className="flex ml-4 mr-4 text-gray-500 items-center">
        <div className="flex">
          <Image
            className="w-4 h-4 rounded-full"
            src={LikeImage}
            width={0}
            height={0}
          />
          <Image
            className="w-4 h-4 rounded-full"
            src={UseFull}
            width={0}
            height={0}
          />
          <Image
            className="w-4 h-4 rounded-full"
            src={SaveImage}
            width={0}
            height={0}
          />
        </div>
        <span className="flex-1 text-xs hover:text-blue-400 hover:underline">
          Samiksha Patel and 1,049 Others
        </span>
        <div className="space-x-2">
          <span className="text-xs hover:text-blue-400 hover:underline">
            42 comments
          </span>
          <span className="text-xs hover:text-blue-400 hover:underline">
            21 repost
          </span>
        </div>
      </div>
<div className="bg-gray-400 h-[1px] ml-5 mr-5 mt-2"></div>
      <div className="w-auto  flex p-3 md:space-x-8  items-center">
        <div className="flex flex-1 items-center gap-1 hover:bg-gray-300 rounded-lg p-1" >
          <AiOutlineLike className="flex-1 ml-2 text-3xl md:text-xl" />
          <span className="hidden md:block">Like</span>
        </div>
        <div className="flex flex-1 items-center gap-1 hover:bg-gray-300 rounded-lg p-1 ">
          <LiaComments className="flex-1 ml-2 text-3xl md:text-xl" />
          <span className="hidden md:block">Comments</span>

        </div>
        <div className="flex flex-1 items-center gap-1 hover:bg-gray-300 rounded-lg p-1">
          <BiRepost className="flex-1 ml-2 text-3xl md:text-xl" />
          <span className="hidden md:block">Repost</span>
        </div>
        <div className="flex flex-1 items-center gap-1 hover:bg-gray-300 rounded-lg p-1">
          <PiShareFatThin className="flex-1 ml-2 text-3xl font-bold md:text-xl" />
          <span className="hidden md:block">Share</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
