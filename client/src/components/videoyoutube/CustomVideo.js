import React, { useEffect } from "react";
import YouTube from "react-youtube";
import Aos from "aos";

const CustomVideo = () => {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="item-center" data-aos="fade-up" data-aos-duration="1200">
      <YouTube
        videoId="FmZ3YkwQPLM"
        containerClassName="embed embed-youtube"
        // onStateChange={(e) => checkElapsedTime(e)}
        opts={opts}
      />
    </div>
  );
};

export default CustomVideo;
