import React from "react";

const Rickroll = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <iframe
        width="1000"
        height="562"
        src="https://www.youtube.com/embed/3BFTio5296w?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0"
        title="Rickroll"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Rickroll;
