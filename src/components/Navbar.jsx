import React, { useEffect, useRef } from "react";
import { useMainContext } from "../context/MainContext";

const Navbar = () => {
  const { currentTheme, setCurrentTheme, toggleTheme, setLikeData } =
    useMainContext();

  const storage = [
    {
      id: 1,
      liked: false,
    },
    {
      id: 2,
      liked: false,
    },
  ];

  useEffect(() => {
    const defaultTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (defaultTheme) {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }

    const savedStorage = JSON.parse(localStorage.getItem("like"));

    if (!savedStorage || savedStorage.length < 1) {
      localStorage.setItem("like", JSON.stringify(storage));
    } else {
      setLikeData(savedStorage);
    }

    console.log(`system in dark mode: ${defaultTheme}`);
  }, []);

  return (
    <div className="p-[6px] flex items-center justify-between lg:px-2 lg:py-2 fixed bg-[#f8f9fb] w-full z-10 backdrop-blur-md bg-opacity-50 lg:left-0 dark:bg-[#16191e] dark:backdrop-blur-lg dark:bg-opacity-50">
      <div className="p-3 lg:p-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -2 20 20"
          className="w-7 lg:ms-2"
        >
          <title>{"twitter [#154]"}</title>
          <path
            fill="#C08"
            fillRule="evenodd"
            d="M6.29 16c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0 0 20 1.89a8.273 8.273 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.293a8.303 8.303 0 0 1-2.606.98 4.153 4.153 0 0 0-5.806-.175 4.006 4.006 0 0 0-1.187 3.86A11.717 11.717 0 0 1 1.392.738 4.005 4.005 0 0 0 2.663 6.13 4.122 4.122 0 0 1 .8 5.625v.051C.801 7.6 2.178 9.255 4.092 9.636a4.144 4.144 0 0 1-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.315 8.315 0 0 1 0 14.185a11.754 11.754 0 0 0 6.29 1.812"
          />
        </svg>
      </div>
      <div className="flex">
        <button
          onClick={() => {
            setCurrentTheme("dark");
            toggleTheme();
          }}
          className={`lg:w-[44px] lg:h-[44px] p-[12px] focus:bg-black focus:bg-opacity-10 focus:rounded-md items-center justify-center lg:hover:bg-black lg:hover:bg-opacity-5 lg:backdrop-blur-md lg:rounded-md lg:transition-all ${
            currentTheme === "light" ? "visible" : "invisible"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-[20px]"
          >
            <g stroke="#292929" strokeWidth={2.5} clipPath="url(#a)">
              <circle cx={12} cy={12} r={4} strokeLinejoin="round" />
              <path
                strokeLinecap="round"
                d="M20 12h1M3 12h1M12 20v1M12 3v1M17.657 17.657l.707.707M5.636 5.636l.707.707M6.343 17.657l-.707.707M18.364 5.636l-.707.707"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h24v24H0z" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button
          onClick={() => {
            setCurrentTheme("light");
            toggleTheme();
          }}
          className={`lg:w-[44px] lg:h-[44px] p-[12px] focus:bg-white focus:bg-opacity-10 focus:rounded-md flex items-center justify-center lg:hover:bg-white lg:hover:bg-opacity-15 lg:backdrop-blur-md lg:rounded-md lg:transition-all ${
            currentTheme === "dark" ? "block" : "hidden"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-[20px]"
          >
            <g fill="#f2f3f5">
              <path d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.484.484 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432c.125.049.223.148.272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.484.484 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.484.484 0 0 1-.273-.274l-.43-1.095ZM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.484.484 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.484.484 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.484.484 0 0 1-.272-.273l-.157-.4Z" />
              <path
                d="M12 22c5.523 0 10-4.477 10-10 0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10Z"
                opacity={0.5}
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
