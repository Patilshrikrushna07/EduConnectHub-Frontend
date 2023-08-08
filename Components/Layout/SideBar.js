import React from "react";

const SideBar = () => {
  let sidebarValues = [
    {
      value: "Home",
    },
    {
      value: "education",
    },
    {
      value: "qwetyt",
    },
    {
      value: "Community",
    },
    {
      value: "Work",
    },
    {
      value: "BLog",
    },
    {
      value: "Exy",
    },
  ];

  return (
    <div className="ml-32">
      {sidebarValues.map((item, index) => {
        return (
          <div key={index}>
            <ul className="flex flex-row md:flex-col gap-4 w-fit px-4 md:px-0 md:overflow-hidden overflow-y-scroll scrollbar-none md:w-auto md:py-4 pr-4 md:pr-0">
              <span className="text-sm md:text-lg span1 ">{item.value}</span>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
