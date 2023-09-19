import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navebar";
import ParentsLayout from "@/Components/Layout/ParentsLayout";
import SideBar from "@/Components/Layout/SideBar";
import ChildLayout from "@/Components/Layout/ChildLayout";
import HomeSlider from "@/Components/Slider/Slider";
import PostCard from "@/Components/Posts/PostCard";
import ProfileCard from "@/Components/Profile/ProfileCard";
import Loader from "@/Components/Loader";
import { PostSkeleton, ProfileWidgetSkeleton } from "@/Components/Skeleton";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
   <ChildLayout>
      <HomeSlider/>  
      <div className="md:flex ">
      <div className="md:mt-14 mt-3 mb-14 md:w-[500px] ">
      <PostSkeleton/>
        <PostCard/>
        <PostCard/>
        <PostSkeleton/>
        <PostCard/>
        <PostCard/>
        <PostSkeleton/>
        <PostCard/>
        <PostCard/>
        <PostSkeleton/>
      </div>
      <div className="md:mt-14 ml-16 mt-3 mb-14 w-[300px] justify-between sticky top-0 scrollbar-none">
      <ProfileCard/>
      </div>
        </div>
   </ChildLayout>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = req.headers.cookie || ''; 
  const cookieArray = cookies.split(';').map(cookie => cookie.trim());
  
  // Find the authToken cookie
  const authTokenCookie = cookieArray.find(cookie => cookie.startsWith('authToken='));

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
