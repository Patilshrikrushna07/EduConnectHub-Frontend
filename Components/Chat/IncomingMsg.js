import React from "react";

const IncomingMsg = ({message}) => {
  return (
    <div className="p-4  justify-start">
        <div className="bg-gray-400 border border-b-300 max-w-sm rounded-s-xl rounded-tr-xl p-3 mt-2 mr-auto">
          <span className="text-white  break-words">
          {message.text}
          </span>
        </div>
        <div className="flex justify-start hover:underline cursor-pointer">
          <span className="text-sm text-gray-500">
          {message.timestamp.toLocaleString()}
          </span>
        </div>
    </div>
  );
};

export default IncomingMsg;
