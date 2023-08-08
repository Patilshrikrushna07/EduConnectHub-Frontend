import React from "react";
import ParentsLayout from "./ParentsLayout";
import SideBar from "./SideBar";

const ChildLayout = ({ children }) => {
  return (
    <ParentsLayout>
      <main className="flex ">
        <SideBar />
        <div className=" w-screen mr-11 mt-8">{children}</div>
      </main>
    </ParentsLayout>
  );
};

export default ChildLayout;
