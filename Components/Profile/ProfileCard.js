import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBookmarkFill } from "react-icons/bs";

const ProfileCard = () => {
  return (
    <div className="w-full bg-white rounded-lg border border-[#e7dddd] md:block hidden">
      <div>
        <div className="relative">
          <Image
            className="w-full h-20 rounded-t-lg "
            src="https://soliloquywp.com/wp-content/uploads/2016/09/How-to-Add-a-Homepage-Slider-in-WordPress.png"
            alt="Slide 1"
            width={0}
            height={0}
          />
          <Image
            className="w-20 h-20 rounded-full absolute bottom-[-40px] left-[110px] border  border-b-white"
            src="https://img.freepik.com/free-psd/horizontal-youtube-banner-home-furniture-online-shop_23-2149047881.jpg"
            alt="Slide 1"
            width={0}
            height={0}
          />
        </div>
      </div>
      <div>
        <span className="mt-14  p-2 items-center justify-center flex text-black text-xl hover:text-blue-400 hover:underline">
          Shrikrushna Patil
        </span>
        <p className="text-gray-500 flex justify-center text-sm">
          Full Stack Developer At Medisage
        </p>
      </div>
      <div className="bg-gray-400 h-[1px] mt-2"></div>

      <div className="p-1 mt-2">
        <div className="flex  hover:bg-gray-100 ">
          <Link className="text-gray-500 text-sm flex-1 ml-3" href={""}>
            Who viewd your profile
          </Link>
          <span className="text-blue-400 mr-3">71</span>
        </div>
        <div className="flex  mt-1 hover:bg-gray-100">
          <Link className="text-gray-500 text-sm flex-1 ml-3" href={""}>
            Impression in your Post
          </Link>
          <span className="text-blue-400 mr-3 ">1090</span>
        </div>
      </div>
      <div className="bg-gray-400 h-[1px] mt-2 "></div>
      <div className="flex items-center gap-2 p-3 hover:bg-gray-100">
        <BsBookmarkFill className="text-gray-400 "/>
        <span className="text-gray-400">My items</span>
      </div>
    </div>
  );
};

export default ProfileCard;
