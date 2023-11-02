import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import defaultImage from "../../public/defaultImage.png";
// import defaultCoverImage from "../../public/"

import {
  CoverImage,
  ProfileSkelton,
  ProfileWidgetSkeleton,
  WidgetSkeleton,
} from "../Skeleton";

const ProfileDetails = ({ userDetail, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <ProfileSkelton />
      ) : (
        <div className="w-full bg-white rounded-lg border border-[#e7dddd] ">
          <div>
            <div className="relative">
              <Image
                className="w-auto h-auto md:rounded-t-lg "
                src={userDetail?.cover_image_name}
                alt="Slide 1"
                width={700}
                height={2}
              />
              <Image
                className="w-auto h-auto rounded-full absolute bottom-[-33px] left-[20px] border-4 border-white"
                src={userDetail?.image_name ? userDetail?.image_name :defaultImage}
                alt=" "
                width={100}
                height={28}
              />

              <div className="bg-blue-50 text-green-600 items-center flex justify-end p-1 gap-1 pr-5">
                <GoVerified />
                {userDetail?.is_profile_verified ? (
                  <span>Verified</span>
                ) : (
                  <span>UnVerified</span>
                )}
              </div>
            </div>
          </div>
          <div className="ml-4">
            <span className="mt-10  flex text-black font-medium text-2xl hover:text-blue-400 hover:underline">
              {userDetail?.fname} {userDetail?.lname}
            </span>
            <p className="text-gray-500 flex text-base">
              Ex@Full-Stack developer Intern at Medisage
            </p>
            <p className="text-gray-500 flex text-base">
              {userDetail?.city} {userDetail?.state && ","}
              {userDetail?.state} {userDetail?.country_name && ","}
              {userDetail?.country_name}
            </p>
          </div>
          <div className="p-3 mt-2">
            <div className="flex">
              <div className="text-blue-400 mr-3">
                <button className="rounded-full flex flex-1 bg-blue-500 w-32 h-8  mt-2 items-center justify-center text-white font-bold hover:bg-blue-400 md:hover:text-black">
                  Edit
                </button>
              </div>
              <div className="text-blue-400 mr-3">
                <button className="rounded-full flex flex-1 bg-blue-100 text-blue-700 w-32 h-8  mt-2 items-center justify-center font-bold  md:hover:text-black">
                  Share
                </button>
              </div>
            </div>
            <div className="flex  mt-1 hover:bg-gray-100"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDetails;
