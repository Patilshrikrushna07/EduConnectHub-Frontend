import MainLayout from "@/Components/Layout/MainLayout";
import Loginscreen from "@/Components/login/Loginscreen";
import RegisterScreen from "@/Components/login/RegisterScreen";
import { getRequest } from "@/config/axiosInterceptor";
import React, { useEffect, useState } from "react";

const index = () => {
  const [userType, setUserType] = useState("password");
  const [userEmail,setuserEmail]=useState("");
  console.log(userType);
  return (
    <div className="bg-[#e8e9ee]  h-screen flex items-center justify-center ">
      {userType == "password" ? (
        <Loginscreen setUserTypes={setUserType} setuserEmail={setuserEmail} />
      ) : (
       <RegisterScreen  userType={userType} userEmail={userEmail}/>
      )}
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = req.headers.cookie || ''; 
  const cookieArray = cookies.split(';').map(cookie => cookie.trim());
  
  // Find the authToken cookie
  const authTokenCookie = cookieArray.find(cookie => cookie.startsWith('authToken='));

  if (authTokenCookie) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }
  return { props: {} };
}