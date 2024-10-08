import React from "react";
import waw from "../assets/svg/waw.svg";
import igw from "../assets/svg/igw.svg";
import linkw from "../assets/svg/linkedinw.svg";
import ghbw from "../assets/svg/githubw.svg";

const Footer = () => {
  return (
    <div className="mb-5 lg:mb-6 mt-10 lg:mt-0">
      <div className="flex justify-center gap-5 lg:gap-2 dark:hidden">
        <div className="lg:p-2 lg:hover:bg-white lg:hover:bg-opacity-5 lg:backdrop-blur-md lg:rounded-md lg:transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 lg:w-6 lg:h-6"
          >
            <g fill="#000">
              <path d="m2 22 1.412-5.13a9.888 9.888 0 0 1-1.321-4.95C2.081 6.445 6.526 2 11.99 2a9.848 9.848 0 0 1 7.016 2.903 9.85 9.85 0 0 1 2.904 7.017c0 5.463-4.446 9.909-9.91 9.909a9.833 9.833 0 0 1-4.738-1.21L2 22Zm5.494-3.165.303.181a8.245 8.245 0 0 0 4.193 1.15c4.536 0 8.236-3.7 8.236-8.237a8.194 8.194 0 0 0-2.41-5.826 8.206 8.206 0 0 0-5.826-2.42c-4.547 0-8.245 3.7-8.245 8.237a8.22 8.22 0 0 0 1.26 4.385l.191.313-.836 3.044 3.135-.827Z" />
              <path
                fillRule="evenodd"
                d="M9.52 7.767c-.181-.414-.383-.424-.554-.424-.151-.01-.313-.01-.484-.01a.92.92 0 0 0-.665.312c-.232.252-.867.847-.867 2.067 0 1.22.887 2.4 1.008 2.56.12.162 1.713 2.742 4.234 3.74 2.096.827 2.52.666 2.974.615.453-.05 1.462-.595 1.673-1.18.202-.574.202-1.078.141-1.179-.06-.1-.232-.161-.474-.292-.252-.12-1.461-.726-1.693-.807-.232-.08-.394-.12-.555.121-.161.253-.635.807-.786.968-.141.162-.292.182-.534.06-.252-.12-1.049-.382-1.996-1.23-.736-.655-1.23-1.47-1.382-1.712-.14-.253-.02-.384.111-.505.112-.11.253-.292.374-.433.12-.142.16-.253.252-.414.08-.161.04-.312-.02-.433-.061-.11-.535-1.331-.757-1.825Z"
                clipRule="evenodd"
              />
            </g>
          </svg>
        </div>
        <div className="lg:p-2 lg:hover:bg-white lg:hover:bg-opacity-5 lg:backdrop-blur-md lg:rounded-md lg:transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 lg:w-6 lg:h-6"
          >
            <g fill="#000" fillRule="evenodd" clipRule="evenodd">
              <path d="M12 2c-2.716 0-3.056.011-4.123.06-1.064.049-1.792.218-2.428.465A4.898 4.898 0 0 0 3.678 3.68a4.905 4.905 0 0 0-1.153 1.77c-.246.636-.416 1.364-.465 2.429C2.012 8.944 2 9.283 2 12c0 2.717.011 3.056.06 4.123.049 1.064.218 1.792.465 2.428.251.666.644 1.271 1.154 1.771.5.509 1.103.902 1.77 1.153.636.247 1.364.416 2.428.465 1.067.049 1.407.06 4.123.06s3.056-.011 4.123-.06c1.064-.049 1.792-.218 2.428-.465a4.898 4.898 0 0 0 1.771-1.154c.509-.5.902-1.103 1.153-1.77.247-.636.416-1.364.465-2.428.049-1.067.06-1.407.06-4.123s-.011-3.056-.06-4.123c-.049-1.064-.218-1.792-.465-2.428a4.903 4.903 0 0 0-1.154-1.771 4.905 4.905 0 0 0-1.77-1.153c-.636-.246-1.364-.416-2.429-.465C15.056 2.012 14.717 2 12 2Zm0 1.802c2.67 0 2.987.01 4.041.058.975.045 1.504.207 1.857.345.467.18.8.398 1.15.747.35.35.567.683.747 1.15.138.353.3.882.345 1.857.048 1.054.058 1.371.058 4.041 0 2.67-.01 2.987-.058 4.041-.045.975-.207 1.504-.345 1.857-.16.434-.415.827-.747 1.15a3.094 3.094 0 0 1-1.15.747c-.353.138-.882.3-1.857.345-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.041-.058-.975-.045-1.504-.207-1.857-.345a3.097 3.097 0 0 1-1.15-.747 3.099 3.099 0 0 1-.747-1.15c-.138-.353-.3-.882-.345-1.857-.048-1.054-.058-1.371-.058-4.041 0-2.67.01-2.987.058-4.041.045-.975.207-1.504.345-1.857.18-.467.398-.8.747-1.15a3.095 3.095 0 0 1 1.15-.747c.353-.138.882-.3 1.857-.345C9.013 3.812 9.33 3.802 12 3.802Z" />
              <path d="M12 15.337a3.337 3.337 0 1 1 0-6.674 3.337 3.337 0 0 1 0 6.674Zm0-8.477a5.14 5.14 0 1 0 0 10.28 5.14 5.14 0 0 0 0-10.28Zm6.635-.093a1.215 1.215 0 1 1-2.43 0 1.215 1.215 0 0 1 2.43 0Z" />
            </g>
          </svg>
        </div>
        <div className="lg:p-2 lg:hover:bg-white lg:hover:bg-opacity-5 lg:backdrop-blur-md lg:rounded-md lg:transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 lg:w-6 lg:h-6"
          >
            <path
              fill="#000"
              d="M22 3.47v17.06A1.47 1.47 0 0 1 20.53 22H3.47A1.47 1.47 0 0 1 2 20.53V3.47A1.47 1.47 0 0 1 3.47 2h17.06A1.47 1.47 0 0 1 22 3.47ZM7.882 9.648h-2.94v9.412h2.94V9.647Zm.265-3.235a1.694 1.694 0 0 0-1.682-1.706h-.053a1.706 1.706 0 0 0 0 3.412 1.694 1.694 0 0 0 1.735-1.653v-.053Zm10.912 6.93c0-2.83-1.8-3.93-3.588-3.93a3.353 3.353 0 0 0-2.977 1.517h-.082V9.647H9.647v9.412h2.941v-5.006a1.953 1.953 0 0 1 1.765-2.106h.112c.935 0 1.63.588 1.63 2.07v5.042h2.94l.024-5.718Z"
            />
          </svg>
        </div>
        <div className="lg:p-2 lg:hover:bg-white lg:hover:bg-opacity-5 lg:backdrop-blur-md lg:rounded-md lg:transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 lg:w-6 lg:h-6"
          >
            <path
              fill="#000"
              fillRule="evenodd"
              d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="dark:flex justify-center gap-5 lg:gap-2 hidden">
        <button className="lg:p-2 lg:hover:bg-white lg:hover:bg-opacity-5 lg:backdrop-blur-md lg:rounded-md lg:transition-all">
          <img src={waw} alt="" className="w-6 h-6 lg:w-6 lg:h-6" />
        </button>
        <button className="lg:p-2 lg:hover:bg-white lg:hover:bg-opacity-5 lg:backdrop-blur-md lg:rounded-md lg:transition-all">
          <img src={igw} alt="" className="w-6 h-6 lg:w-6 lg:h-6" />
        </button>
        <button className="lg:p-2 lg:hover:bg-white lg:hover:bg-opacity-5 lg:backdrop-blur-md lg:rounded-md lg:transition-all">
          <img src={linkw} alt="" className="w-6 h-6 lg:w-6 lg:h-6" />
        </button>
        <button className="lg:p-2 lg:hover:bg-white lg:hover:bg-opacity-5 lg:backdrop-blur-md lg:rounded-md lg:transition-all">
          <img src={ghbw} alt="" className="w-6 h-6 lg:w-6 lg:h-6" />
        </button>
      </div>
      <p className="text-center text-xs py-3 lg:py-1">navf27 &copy; 2024</p>
    </div>
  );
};

export default Footer;
