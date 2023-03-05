import React from "react";

const Loader = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <div className=" font-bold text-lg">
        <span>HANDIWORKER</span>
        <span className=" text-sm text-blue-400">.shop</span>
      </div>
      <div className="animate-spin w-[35px] h-[35px] rounded-full border-[5px] border-gray-200 border-b-blue-400 mt-4"></div>
    </div>
  );
};

export default Loader;
