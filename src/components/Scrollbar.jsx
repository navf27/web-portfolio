import React from "react";

const Scrollbar = () => {
  return (
    <>
      <div className="px-5 mt-4 flex justify-between lg:justify-center lg:gap-28 lg:mt-9">
        <div className="border-b-4 border-[#CC0088] w-fit px-5 py-1.5 text-sm lg:text-[16px] font-bold">
          Feed
        </div>
        <div className="w-fit px-4 py-1.5 text-sm lg:text-[16px] font-bold">
          About
        </div>
        <div className="w-fit px-4 py-1.5 text-sm lg:text-[16px] font-bold">
          Content
        </div>
      </div>
    </>
  );
};

export default Scrollbar;
