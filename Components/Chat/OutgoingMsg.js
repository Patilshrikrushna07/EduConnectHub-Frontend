import React from "react";

const OutgoingMsg = ({message}) => {
  return (
    <div className=" justify-end p-4">
      <div className="bg-blue-400 max-w-sm  rounded-s-xl rounded-tr-xl p-3 mt-2 ml-auto">
        <span className="text-white  break-words">
         {message.text}
        </span>
      </div>
      <div className="flex justify-end hover:underline cursor-pointer">
        <span className="text-sm text-gray-500">  {message.timestamp.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default OutgoingMsg;
