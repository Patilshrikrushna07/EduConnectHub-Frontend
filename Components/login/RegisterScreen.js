import Image from "next/image";
import React, { useState } from "react";
import Edubloglogo from "../../public/edublogs-logo-vector.svg";
import Lottie from "lottie-react";
import animationData from "../../public/login.json";
import { getRequest, postRequest } from "@/config/axiosInterceptor";
import { BsSearch } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";


const RegisterScreen = ({ userType, userEmail }) => {
  const [email, setEmail] = useState(userEmail);
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    control,
    setValue,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      fname: "",
      lname: "",
      mobile_number: "",
      email: userEmail,
      password: "",
      conformPassword: "",
    },
  });
  const password = watch('password');
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
        const res = await postRequest({
          url: `auth/register`,
          body:{
            fname:data.fname,
            lname:data.lname,
            email:data.email,
            mobile_number:data.mobile_number,
            password:String(data.conformPassword)
          }
        });
        if (res) {
      setIsLoading(false);
        console.log(res.data);
          document.cookie = `memberId=${res.data.memberId}; path=/; SameSite=Strict`;
          document.cookie = `authToken=${res.data.token}; path=/; SameSite=Strict`;
          window.location.href = "/";
        }
      } catch (error) {
      setIsLoading(false);
        console.error(error);
      }
  };

 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConformPasswordVisibility = () => {
    setShowConformPassword(!showConformPassword);
  };
  return (
    <>
    <div className="rounded-lg bg-white md:w-[500px] md:h-auto w-full h-full">
      <Image
        className="md:w-28 md:h-28 md:p-2 w-24 ml-5"
        src={Edubloglogo}
        alt="Slide 1"
        width={10}
        height={10}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="flex-1 items-center justify-center relative p-4 mt-10 md:mt-0">
            <label
              htmlFor="fname"
              className="text-xs text-gray-400 font-semibold"
            >
              First Name
            </label>
            <input
              type="text"
              id="f"
              className={`${
                !errors.fname && errors.lname ? "mb-6" : ""
              } focus-within:outline-none p-2 border border-gray-300 rounded-lg w-full`}
              placeholder={`First name`}
              {...register("fname", {
                required: {
                  value: true,
                  message: "* First name is required",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "* Enter Valid First Name (Only Characters)",
                },
              })}
            />
            {errors.fname && (
              <p className="text-xs font-medium text-red-500 pt-2 ">
                {errors.fname.message}
              </p>
            )}
          </div>
          <div className="flex-1 items-center justify-center relative p-4 mt-10 md:mt-0">
            <label
              htmlFor="lname"
              className="text-xs text-gray-400 font-semibold"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              className={`${
                !errors.lname && errors.lname ? "mb-6" : ""
              } focus-within:outline-none p-2 border border-gray-300 rounded-lg w-full`}
              placeholder={`Last name`}
              {...register("lname", {
                required: {
                  value: true,
                  message: "* Last name is required",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "* Enter Valid First Name (Only Characters)",
                },
              })}
            />
            {errors.lname && (
              <p className="text-xs font-medium text-red-500 pt-2 ">
                {errors.lname.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 items-center justify-center relative p-4  md:mt-0">
            <label
              htmlFor="email"
              className="text-xs text-gray-400 font-semibold"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className={`${
                !errors.email && errors.email ? "mb-6" : ""
              } focus-within:outline-none p-2 border border-gray-300 rounded-lg w-full`}
              placeholder={`Email`}
              {...register("email", {
                required: {
                  value: true,
                  message: "* Email is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "* Enter Valid Email",
                },
                maxLength: {
                  value: 100,
                  message: "* Please enter Maximum 100 characters",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs font-medium text-red-500 pt-2 ">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex-1 items-center justify-center relative p-4  md:mt-0">
            <label
              htmlFor="mobile_number"
              className="text-xs text-gray-400 font-semibold"
            >
              Enter contact number
            </label>
            <input
              type="text"
              id="mobile_number"
              className={`${
                !errors.mobile_number && errors.mobile_number ? "mb-6" : ""
              } focus-within:outline-none p-2 border border-gray-300 rounded-lg w-full`}
              placeholder={`Mobile Mumber`}
              {...register("mobile_number", {
                required: {
                  value: true,
                  message: "*Phone Number is required",
                },
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "* Enter a valid 10-digit mobile number",
                },
              })}
            />
            {errors.mobile_number && (
              <p className="text-xs font-medium text-red-500 pt-2 ">
                {errors.mobile_number.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex-1 items-center justify-center relative p-4  md:mt-0">
          <label
            htmlFor="password"
            className="text-xs text-gray-400 font-semibold"
          >
            Enter Password
          </label>
          <div className="flex items-center justify-center relative">
            <BsSearch
              className="absolute right-4 text-gray-400"
              onClick={togglePasswordVisibility}
            />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className={`${
                !errors.password && errors.password ? "mb-6" : ""
              } focus-within:outline-none p-2 border border-gray-300 rounded-lg w-full`}
              placeholder={`Password`}
              {...register("password", {
                required: {
                  value: true,
                  message: "*Password is required",
                },
              })}
            />
          </div>
            {errors.password && (
              <p className="text-xs font-medium text-red-500 pt-2 ">
                {errors.password.message}
              </p>
            )}
        </div>
        <div className="flex-1 items-center justify-center relative p-4 md:mt-0">
          <label
            htmlFor="conformPassword"
            className="text-xs text-gray-400 font-semibold"
          >
            Comfirm Password
          </label>
          <div className="flex items-center justify-center relative">
            <BsSearch
              className="absolute right-4 text-gray-400"
              onClick={toggleConformPasswordVisibility}
            />
            <input
              type={showConformPassword ? "text" : "password"}
              id="conformPassword"
              className={`${
                !errors.conformPassword && errors.conformPassword ? "mb-6" : ""
              } focus-within:outline-none p-2 border border-gray-300 rounded-lg w-full`}
              placeholder={`Confirm Password`}
              {...register("conformPassword", {
                required: {
                  value: true,
                  message: "*Password is required",
                },
                validate: (conformPassword) => conformPassword === password || '* Passwords do not match',
              })}
            />
          </div>
            {errors.conformPassword && (
              <p className="text-xs font-medium text-red-500 pt-2 ">
                {errors.conformPassword.message}
              </p>
            )}
        </div>

        <div className="mr-4 ml-4 md:mb-5">
          <button
            className="rounded-full bg-blue-300 w-full h-14 mt-2 items-center justify-center text-white font-bold hover:bg-blue-200 hover:text-black"
            type="submit"
          >
            Register Now
          </button>
        </div>
      </form>
    </div>
    {isLoading &&
    <Loader/>
    }
    </>
  );
};

export default RegisterScreen;
