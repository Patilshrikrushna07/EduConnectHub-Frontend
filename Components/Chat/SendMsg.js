import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { io } from "socket.io-client";
var socket;

const SendMsg = ({setMessages,messages}) => {
  const [message, setMessage] = useState([]);
  const sendMessage = async (e) => {
    e.preventDefault(); 
    socket = io("http://localhost:5000");
    socket.emit('new message',message)
    if (message.trim() !== "") {
      const timestamp = new Date();
      setMessages([...messages, { text: message, sender: "user" ,timestamp }]);
      setMessage("");
    }
    console.log("Message", message); 
  };

  return (
    <div className="w-full rounded-xl ">
      <form onSubmit={sendMessage} className=" flex gap-2">
        <div className="w-full bg-[#eee] py-3 px-4 rounded-full flex items-center gap-2">
          <BsEmojiSmile className="text-gray-500 text-lg cursor-pointer" />
          <input
            type="text"
            placeholder="Type a message"
            className="bg-transparent focus:outline-none text-sm w-full"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <button
          className="bg-[#f9818b] text-white rounded-full p-4 hover:opacity-80"
          type="submit"
        >
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
};

export default SendMsg;
