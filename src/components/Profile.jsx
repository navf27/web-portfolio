import React from "react";
import me from "../assets/img/bnw-square.jpg";
import svg1 from "../assets/svg/SVG.svg";
import svg2 from "../assets/svg/SVG-1.svg";
import svg3 from "../assets/svg/SVG-3.svg";
import { TypeAnimation } from "react-type-animation";

const Profile = () => {
  return (
    <>
      <div className="bg-white h-[64px] dark:bg-[#16191e]"></div>
      {/* <div className="bg-[#D1E6FA] h-36 lg:h-[241px] grid place-content-center"> */}
      <div className="h-36 lg:h-[241px] grid place-content-center bg-cover bg-[center_60%] relative">
        <div className="absolute w-full h-full bg-black bg-opacity-10 dark:bg-opacity-50"></div>
        <TypeAnimation
          sequence={[
            "<",
            200,
            "<N",
            200,
            "<NA",
            200,
            "<NAV",
            200,
            "<NAVF",
            200,
            "<NAVF2",
            200,
            "<NAVF27",
            200,
            "<NAVF27 /",
            200,
            "<NAVF27 />",
            200,
            " ",
            200,
          ]}
          speed={50}
          deletionSpeed={3}
          repeat={Infinity}
          wrapper="div"
          className="text-slate-800 dark:text-white text-2xl font-jetbrains font-medium"
        />
      </div>
      <div className="relative">
        <img
          src={me}
          alt=""
          className="w-[87px] lg:w-[148px] rounded-full border-4 border-black dark:border-[#f8f9fb] absolute top-0 left-4 lg:left-[70px] -translate-y-1/2"
        />
        <div className="flex justify-end pt-2 lg:pt-[10px] lg:pe-14">
          <button className="bg-[#CC0088] mt-2 me-4 px-4 lg:px-0 py-2 lg:py-0 lg:w-[106px] lg:h-[40px] rounded-full text-white text-sm font-bold flex items-center lg:justify-center gap-1 lg:gap-2 relative">
            <div className="w-full h-full absolute left-0 border-4 border-transparent hover:border-black dark:hover:border-[#f8f9fb] rounded-full"></div>
            <p className="lg:text-[16px]">Follow</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000"
              viewBox="0 0 20 20"
              className="w-5  "
            >
              <title>{"github [#142]"}</title>
              <path
                fill="#fff"
                fillRule="evenodd"
                stroke="none"
                d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
              />
            </svg>
          </button>
        </div>
        <div className="px-4 mt-1 lg:px-[72px] lg:mt-[25px]">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl lg:text-4xl font-bold tracking-wide">
              Naufal Aji
            </h1>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon multi-color w-6"
                viewBox="0 0 24 24"
              >
                <title
                  style={{
                    strokeWidth: 2,
                  }}
                >
                  {"verified"}
                </title>
                <path
                  d="M20 10c-.68-.61-1.63-.89-2.31-1.48-.84-.76-1.43-2.23-2.44-2.64s-2.16.37-3.24.37-2.27-.76-3.25-.37-1.6 1.87-2.44 2.63C5.63 9.1 4.68 9.38 4 10a9.68 9.68 0 0 0 .12-1.13 4.23 4.23 0 0 1 .31-1.63 2.94 2.94 0 0 1 1.17-.86A6.53 6.53 0 0 0 7 5.49a8.26 8.26 0 0 0 1.08-1.32A3.3 3.3 0 0 1 9.11 3a.75.75 0 0 1 .28 0 4.32 4.32 0 0 1 1 .21 6.35 6.35 0 0 0 1.61.27 6.27 6.27 0 0 0 1.56-.27A2.75 2.75 0 0 1 14.91 3a3.51 3.51 0 0 1 1 1.13A7.65 7.65 0 0 0 17 5.49a7.14 7.14 0 0 0 1.38.89 3.14 3.14 0 0 1 1.18.86 4.68 4.68 0 0 1 .3 1.63c.05.34.08.73.14 1.13Z"
                  style={{
                    fill: "#b7b7b7",
                    strokeWidth: 2,
                  }}
                />
                <path
                  d="M21.37 12c0 1-.86 1.79-1.14 2.67s-.1 2.08-.65 2.83-1.73.94-2.5 1.49-1.28 1.62-2.18 1.92-1.9-.26-2.9-.26-2 .55-2.9.27S7.67 19.55 6.92 19s-1.92-.72-2.5-1.49-.35-1.92-.65-2.83S2.63 13 2.63 12s.86-1.8 1.14-2.68.1-2.08.65-2.83S6.15 5.56 6.92 5 8.2 3.39 9.1 3.09s1.93.27 2.9.27 2-.55 2.9-.27S16.33 4.46 17.08 5s1.94.72 2.5 1.49.35 1.92.65 2.83S21.37 11 21.37 12Z"
                  style={{
                    fill: "none",
                    stroke: "#000",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                />
                <path
                  d="m8 12 3 3 5-5"
                  style={{
                    fill: "none",
                    stroke: "#c08",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }}
                />
              </svg>
            </div>
          </div>
          <p className="lg:mt-1 my-1 lg:my-0">
            Life for code | Code for life ✨
          </p>
          <p className="leading-snug">
            Web Developer. Front-End Developer. Back-End Developer. Fullstack
            Developer.
          </p>
          <div className="my-3 flex items-center gap-4 lg:gap-5">
            <div className="w-fit flex items-center gap-1">
              <img src={svg1} alt="" className="lg:w-[21px]" />
              <div className="mt-1 lg:mt-0">
                <p className="text-xs lg:text-[16px]">Available</p>
              </div>
            </div>
            <div className="w-fit flex items-center">
              <img src={svg2} alt="" className="lg:w-[20px]" />
              <a
                href="#"
                className="text-xs mt-2 lg:mt-0 lg:text-[16px] font-bold text-[#CC0088] border-b-4 border-transparent hover:border-[#CC0088]"
              >
                /resume
              </a>
            </div>
            <div className="w-fit flex items-center gap-1">
              <img src={svg3} alt="" className="lg:w-[20px]" />
              <p className="text-xs mt-1 lg:mt-0 lg:text-[16px]">
                Joined Aug 24
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
