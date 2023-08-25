import Image from "next/image";
import React, { useState } from "react";
import Edubloglogo from "../../public/edublogs-logo-vector.svg";
import Lottie from "lottie-react";
import animationData from "../../public/login.json";
import { getRequest, postRequest } from "@/config/axiosInterceptor";
import { BsSearch } from "react-icons/bs";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { withRouter } from 'react-router-dom';

const Loginscreen = ({ setUserTypes,setuserEmail }) => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const checkEmail = async () => {
    try {
      const res = await getRequest({
        url: `auth/checkPhoneNumber`,
        params: `?email=${email}`,
      });
      if (res) {
        console.log(res.data.data.type);
        setUserType(res.data.data.type);
        setUserTypes(res.data.data.type);
        setUserName(res.data.data.userName);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const loginNow = async () => {
    try {
      const res = await postRequest({
        url: `auth/login`,
        body: {
          email: email,
          password: password,
        },
      });
      if (res) {
        document.cookie = `memberId=${res.data.memberId}; path=/; SameSite=Strict`;
        document.cookie = `authToken=${res.data.token}; path=/; SameSite=Strict`;
        setIsValidPassword(true);
        window.location.href = '/';
      }
    } catch (error) {
      toast.warn("Password Not Match!");
      setIsValidPassword(false);
      console.error(error);
    }
  };
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setuserEmail(newEmail);
    validateEmail(newEmail);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailPattern.test(email));
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="rounded-lg bg-white md:w-[500px] md:h-auto w-full h-full">
      <Image
        className="md:w-28 md:h-28 md:p-2 w-24 ml-5"
        src={Edubloglogo}
        alt="Slide 1"
        width={10}
        height={10}
      />
      <Lottie className="md:w-full md:h-48" animationData={animationData} />
      <div className="pt-4">
        {userName ? (
          <div className="flex items-center">
            <p className=" text-gray-500 text-xl p-3 ">Welcome back,</p>
            <span className="text-black text-4xl p-3 ">{userName}</span>
          </div>
        ) : (
          <span className="text-gray-500 md:text-4xl text-3xl p-3 ">
            We are Glad to see you
          </span>
        )}
      </div>
      <div className="items-center justify-center relative p-4 mt-10 md:mt-0">
        <span className="px-2 py-3 text-black">Enter Your Email</span>
        <input
          className={`border-2 w-full rounded-lg h-12 px-4 py-3 outline-none text-black ${
            isValidEmail ? "border-gray-300" : "border-red-500"
          }`}
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          autoComplete="off"
        />
        {!isValidEmail && (
          <p className="text-xs font-medium text-red-500 pt-1">
            Please enter a valid email address.
          </p>
        )}
      </div>
      {userType == "password" && (
        <div className="items-center justify-center relative p-4  md:mt-0">
          <span className="px-2 py-3 text-black">Enter Your Password</span>
          <div className="flex items-center justify-center relative">
            <BsSearch
              className="absolute right-4 text-gray-400"
              onClick={togglePasswordVisibility}
            />
            <input
              className={`border-2 w-full rounded-lg h-12 px-4 py-3 outline-none text-black ${
                isValidPassword ? "border-gray-300" : "border-red-500"
              }`}
              type={showPassword ? "text" : "password"}
              placeholder="password"
              id="password"
              autoComplete="off"
              onChange={handlePasswordChange}
            />
          </div>
          {!isValidPassword && (
            <p className="text-xs font-medium text-red-500 pt-1">
              Please enter a Correct Password.
            </p>
          )}
        </div>
      )}
      <div className="mr-4 ml-4 md:mb-5">
        {userType == "password" ? (
          <button
            className="rounded-full bg-blue-300 w-full h-14 mt-2 items-center justify-center text-white font-bold hover:bg-blue-200 hover:text-black"
            disabled={!isValidEmail}
            onClick={loginNow}
          >
            Login Now
          </button>
        ) : (
          <button
            className="rounded-full bg-blue-300 w-full h-14 mt-2 items-center justify-center text-white font-bold hover:bg-blue-200 hover:text-black"
            disabled={!isValidEmail}
            onClick={checkEmail}
          >
            Get Started!
          </button>
        )}
      </div>
    </div>
  );
};

export default Loginscreen;
