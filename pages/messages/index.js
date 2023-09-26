import ChatList from "@/Components/Chat/ChatList";
import ChatSelectMessage from "@/Components/Chat/ChatSelectMessage";
import UserChatList from "@/Components/Chat/UserChatList";
import ChildLayout from "@/Components/Layout/ChildLayout";
import Chat from "@/Components/Layout/chat";
import PostCard from "@/Components/Posts/PostCard";
import ProfileCard from "@/Components/Profile/ProfileCard";
import HomeSlider from "@/Components/Slider/Slider";
import { getRequest } from "@/config/axiosInterceptor";
import React, { useEffect, useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { TbMessageCirclePlus } from "react-icons/tb";
import io from "socket.io-client"; 
const socket = io("http://localhost:5000");
const index = () => {
  const [userChat, setUserChat] = useState(false);
  const [users,setUsers]=useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  
  
  const fetchAllUsers = async () => {
    try {
      setIsLoading(true);
      const res = await getRequest({
        url: `get-all-user`, 
        params: ``,
      });
      if (res) {
        setIsLoading(false);
        setUsers(res.data.data.members);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  useEffect(()=>{
    fetchAllUsers();
  },[])
  const sendMessage = () => {
    socket.emit("chat message", "Hello, Server!");
  };

  useEffect(() => {
    socket.on("chat message", (message) => {
      console.log("Received message from server:", message);
    });

    return () => {
      socket.disconnect(); 
    };
  }, []);
  return (
    <ChildLayout>
      <div className="md:flex bg-white rounded-lg md:h-[600px]">
        <div className={` ${userChat ? "md:block hidden" : ""}`}>
          <ChatList setUserChat={setUserChat} data={users}/>
        </div>

        {userChat ? (
          <UserChatList  data={userChat} setMessages={setMessages} messages={messages}/>
        ) : (
          <div className="flex justify-center items-center ml-4">
            <ChatSelectMessage />
          </div>
        )}
      </div>
    </ChildLayout>
  );
};

export default index;

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = req.headers.cookie || "";
  const cookieArray = cookies.split(";").map((cookie) => cookie.trim());
  const authTokenCookie = cookieArray.find((cookie) =>
    cookie.startsWith("authToken=")
  );

  if (!authTokenCookie) {
    return {
      redirect: {
        destination: `/login`,
        permanent: false,
      },
    };
  }
  return { props: {} };
}
