import React from "react";

const Loader = () => {
  return (
    <div className="lds-ring h-screen absolute w-screen  w-full bg-gray-800 bg-opacity-50 backdrop-blur-[3px] z-50">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-gray-300 h-12 w-12 mb-4"></div>
      </div>
    </div>
  );
};

export default Loader;
