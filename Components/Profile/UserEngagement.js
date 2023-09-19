import Image from "next/image";
import React from "react";
import { FaBlog, FaRegNewspaper } from "react-icons/fa";
import { LiaPhotoVideoSolid } from "react-icons/lia";


const UserEngagement = ({userDetail}) => {
  console.log(userDetail.post);
    const countArray = [
        {
          value: userDetail?.post ?? 0,
          title: "Posts",
        },
        {
            value: userDetail?.viewership??0,
          title: "Viewership",
        },
        {
            value: userDetail?.usefuls??0,
          title: "Usefuls",
        },
        {  value: userDetail?.followers??0, title: "Followers" },
        {  value: userDetail?.following, title: "Following" },

      ];
      const array = [
        {
          name: "Videos",
          desc: "watched",
          value: 5,
          icon: <LiaPhotoVideoSolid/>,
        },
        {
          name: "Blog",
          desc: "read",
          value: 2,
          icon: <FaBlog/>,
        },
        {
          name: "Quiz",
          desc: "attempted",
          value: 2,
          icon: <FaRegNewspaper/>,
        },
      ];
  return (
    <div className="bg-white rounded-lg p-4">
    <p className="text-gray-600 text-sm pb-2">Social</p>
    <div className="grid grid-cols-2 items-center gap-2 pb-3">
      {countArray.map((item, index) => {
        return (
          <div
            className="rounded-lg border border-gray-200 py-1 px-2"
            key={index}
          >
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold">{item.value}</p>
              <div className="text-xs text-gray-700">{item.title}</div>
            </div>
          </div>
        );
      })}
    </div>
    <p className="text-gray-600 text-sm pb-2">
      Content (Only visible to you)
    </p>
    <div className="grid grid-cols-3 items-center gap-2 pb-3">
      {array.map((item, index) => {
        return (
          <div
            className="rounded-lg border border-gray-200 py-1 px-2"
            key={index}
          >
            <div className="flex gap-1 md:flex-col md:gap-0">
              <p className="text-xs text-gray-700">{item.name}</p>
              <p className="text-xs text-gray-700">{item.desc}</p>
            </div>
            <div className="flex items-center gap-2 ">
             <span className="text-blue-600 font-bold text-xl">
                {item.icon}
             </span>
              {/* <Image
                src={`${item.icon}`}
                height={30}
                width={30}
                alt={`${item.name}`}
              /> */}
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default UserEngagement;
