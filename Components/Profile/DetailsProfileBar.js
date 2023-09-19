import React, { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const DetailsProfileBar = () => {
  const reference = useRef();
  const scroll = (scrollOffset) => {
    reference.current.scrollLeft += scrollOffset;
  };
  return (
    <div className="bg-white p-4 md:rounded-lg w-screen md:w-full mt-3">
      <p className="text-lg font-semibold pb-2 flex items-center gap-2">
        10% profile complete{" "}
      </p>
      <div className="relative h-2 w-full bg-blue-50 rounded-lg">
        <div
          className={`absolute h-2 bg-[#38BDF8] rounded-lg`}
          style={{ width: 10 + "%" }}
        ></div>
      </div>
      <p className="text-gray-500 text-sm pt-1">
        Steps to complete your profile
      </p>

      <div className=" pt-6">
        <div
          className="flex gap-3 items-center overflow-scroll scroll scrollbar-none"
          ref={reference}
        >
          <div className="border border-gray-200 rounded-lg py-2 px-4 shrink-0">
            <p>Add profile details</p>
            <p className="text-gray-500 text-sm">
              Add profile details to create <br /> recognition among other
              doctors
            </p>
            <p className="text-medisage_primary-700 font-semibold py-2 cursor-pointer">
              Edit profile
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg py-2 px-4 shrink-0">
            <p>Add Image</p>
            <p className="text-gray-500 text-sm">
              Add profile image to create <br /> recognition among other doctors
            </p>
            <label htmlFor="image">
              <p className="text-medisage_primary-700 font-semibold py-2 cursor-pointer">
                Upload image
              </p>
            </label>
          </div>
          <div className="border border-gray-200 rounded-lg py-2 px-4 shrink-0">
            <p>Add workplace</p>
            <p className="text-gray-500 text-sm">
              Add workplace to create <br />
              recognition among other doctors
            </p>
            <p>Add workplace</p>
          </div>
          <div className="border border-gray-200 rounded-lg py-2 px-4 shrink-0">
            <p>Add profile details</p>
            <p className="text-gray-500 text-sm">
              Add profile details to create <br /> recognition among other
              doctors
            </p>
            <p className="text-medisage_primary-700 font-semibold py-2 cursor-pointer">
              Edit profile
            </p>
          </div>
          <div></div>
        </div>
      <div className="items-center gap-16  text-2xl pt-6  hidden md:flex justify-end ">
        <AiOutlineLeft
          className="cursor-pointer"
          onClick={() => scroll(-250)}
        />
        <AiOutlineRight
          className="cursor-pointer"
          onClick={() => scroll(250)}
        />
      </div>
      </div>
    </div>
  );
};

export default DetailsProfileBar;
