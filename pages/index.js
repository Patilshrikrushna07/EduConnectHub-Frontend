import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navebar";
import ParentsLayout from "@/Components/Layout/ParentsLayout";
import SideBar from "@/Components/Layout/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <ParentsLayout>
      <SideBar/>
    </ParentsLayout>
  );
}
