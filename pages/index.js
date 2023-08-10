import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navebar";
import ParentsLayout from "@/Components/Layout/ParentsLayout";
import SideBar from "@/Components/Layout/SideBar";
import ChildLayout from "@/Components/Layout/ChildLayout";
import HomeSlider from "@/Components/Slider/Slider";
import PostCard from "@/Components/Posts/PostCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
   <ChildLayout>
      <HomeSlider/>  
      <div className="mt-14 mb-14 w-[500px]">
        <PostCard/>
      </div>
   </ChildLayout>
  );
}
