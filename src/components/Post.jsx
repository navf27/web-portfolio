import me from "../assets/img/bnw-square.jpg";
import linkIcon from "../assets/svg/SVG-1.svg";
import pin from "../assets/svg/pin.svg";
import darkLove from "../assets/svg/lvblackborder.svg";
import whiteLove from "../assets/svg/lvwhiteborder.svg";
import redLove from "../assets/svg/lvfullred.svg";
import { useMainContext } from "../context/MainContext";
import { useEffect, useState } from "react";

const Post = (props) => {
  const { likeData, onLoveClicked } = useMainContext();
  const [postLiked, setPostLiked] = useState(false);

  useEffect(() => {
    if (likeData && likeData.length > 0) {
      const postData = likeData.find((item) => item.id === props.id);
      setPostLiked(postData.liked);
    }
  }, [likeData]);

  return (
    <div className="my-8 lg:my-2 mx-4 lg:px-[15px] lg:py-[20px] lg:w-[656px] lg:hover:bg-black lg:dark:hover:bg-white lg:hover:bg-opacity-5 lg:dark:hover:bg-opacity-5 lg:backdrop-blur-md lg:rounded-lg lg:transition-all">
      <div
        className={`flex gap-1 items-center ps-7 mb-3 ${
          props.pinned ? "visible" : "hidden"
        }`}
      >
        <img src={pin} alt="" />
        <p className="text-xs lg:text-[13px]">Pinned</p>
      </div>
      <div className="flex gap-2">
        <div className="h-full w-[40px] shrink-0">
          <img src={me} alt="" className="rounded-full" />
        </div>
        <div>
          <div className="flex items-center">
            <p className="text-sm lg:text-[14px] font-extrabold">Naufal ✨</p>
            <p className="mx-2 border border-slate-600 bg-slate-600 rounded-full h-[3px] w-[3px]"></p>
            <p className="text-xs">{props.date}</p>
          </div>
          <div className="bg-[#DEE2E6] dark:bg-white dark:bg-opacity-30 w-fit px-[10px] my-1 py-[2px] rounded-full flex items-center">
            <span>{props.emot}</span>
            <span className="text-xs font-bold ms-1">{props.tagline}</span>
          </div>
          <h4 className="font-bold text-lg">{props.title}</h4>
          <p className="leading-snug tracking-normal text-[15px]">
            {props.caption}
          </p>
          <img src={props.img} alt="" className="mt-2 rounded-lg" />
          <div
            className={`${
              props.img ? "mt-3 lg:mt-4" : "mt-0 lg:mt-2"
            } relative h-4`}
          >
            <div className="flex gap-[20px] dark:gap-[10px] absolute -end-3 dark:end-2">
              <img
                src={linkIcon}
                alt=""
                className="w-4 lg:w-[20px] opacity-50 dark:opacity-100"
              />
              <button
                className={`${postLiked ? "hidden" : null}`}
                onClick={() => {
                  onLoveClicked(props.id);
                }}
              >
                <img
                  src={whiteLove}
                  alt="like button"
                  title="Like post"
                  className="w-[14px] lg:w-[18px] opacity-70 lg:opacity-65 block dark:hidden"
                />
              </button>
              <button
                className={`${postLiked ? "hidden" : null}`}
                onClick={() => {
                  onLoveClicked(props.id);
                }}
              >
                <img
                  src={darkLove}
                  alt=""
                  className="w-[14px] lg:w-[18px] hidden dark:block"
                />
              </button>
              <button
                className={`${postLiked ? "inline-block" : "hidden"}`}
                onClick={() => {
                  onLoveClicked(props.id);
                }}
              >
                <img
                  src={redLove}
                  alt=""
                  className="w-[14px] lg:w-[18px] dark:ms-[10px] me-[20px] dark:me-0"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
