import React, { useEffect } from "react";
import Post from "../Post";
import testPic from "../../assets/img/test-pic.png";

const Feed = () => {
  return (
    <>
      <div className="lg:my-6 lg:flex lg:items-center lg:flex-col">
        <Post
          id={1}
          date="17 Aug 2024"
          emot="🌴"
          tagline="Fellin' fresh"
          title="Hello World!"
          caption={`This is my site where I try and post about what I'm up to and how to
          do things with code. You can follow along with RSS by hitting the
          "Follow" button up above. Or if you're only interested in stuff I
          wrote about, check out`}
          // img={testPic}
          pinned
        />

        <Post
          id={2}
          date="17 Aug 2024"
          emot="🌴"
          tagline="Fellin' fresh"
          title="Hello World!"
          caption={`This is my site where I try and post about what I'm up to and how to
          do things with code. You can follow along with RSS by hitting the
          "Follow" button up above. Or if you're only interested in stuff I
          wrote about, check out`}
          img={testPic}
        />
      </div>
    </>
  );
};

export default Feed;
