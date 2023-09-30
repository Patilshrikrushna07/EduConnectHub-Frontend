import ChildLayout from "@/Components/Layout/ChildLayout";
import ParentsLayout from "@/Components/Layout/ParentsLayout";
import DetailsProfileBar from "@/Components/Profile/DetailsProfileBar";
import ProfileCard from "@/Components/Profile/ProfileCard";
import ProfileDetails from "@/Components/Profile/ProfileDetails";
import UserEngagement from "@/Components/Profile/UserEngagement";
import { getRequest } from "@/config/axiosInterceptor";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";

const index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetail,setUserDetail]=useState([]);
  const auth_token = getCookie("authToken");

  const userDetails = async () => {
    try {
      setIsLoading(true);
      const res = await getRequest({
        url: `get-user-basic-details`,
        params: `/21?member_id=23`,
        token:"Barear "+auth_token
      });
      if (res) {
        setIsLoading(false);
        setUserDetail(res.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  useEffect(()=>{
    userDetails();
  },[])
  return (
    <>
      <ParentsLayout>
        <div className="md:flex ">
          <div className="md:mt-1 mt-1 mb-14 md:w-[750px] ">
            <ProfileDetails userDetail={userDetail} isLoading={isLoading}/>
            <DetailsProfileBar />
            <DetailsProfileBar />
          </div>
          <div className="md:mt-1 ml-16 mt-3 mb-14 w-[300px] justify-between sticky top-0 scrollbar-none md:block hidden">
            <UserEngagement userDetail={userDetail} isLoading={isLoading} />
          </div>
        </div>
      </ParentsLayout>
    </>
  );
};

export default index;
