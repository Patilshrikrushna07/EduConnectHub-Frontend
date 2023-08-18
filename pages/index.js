import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navebar";
import ParentsLayout from "@/Components/Layout/ParentsLayout";
import SideBar from "@/Components/Layout/SideBar";
import ChildLayout from "@/Components/Layout/ChildLayout";
import HomeSlider from "@/Components/Slider/Slider";
import PostCard from "@/Components/Posts/PostCard";
import ProfileCard from "@/Components/Profile/ProfileCard";
import Chat from "@/Components/Layout/chat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
   <ChildLayout>
      <HomeSlider/>  
      <div className="md:flex ">
      <div className="md:mt-14 mt-3 mb-14 md:w-[500px] ">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </div>
      <div className="md:mt-14 ml-16 mt-3 mb-14 w-[300px] justify-between sticky top-0 scrollbar-none">
      <ProfileCard/>
      {/* <Chat/> */}
      </div>
        </div>
   </ChildLayout>
  );
}
