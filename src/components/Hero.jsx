import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import waveAnimation from "../assets/gif/Wave Loop.json";

const Hero = () => {
  return (
    <div className="relative bg-black w-full min-h-[50vh] flex items-end justify-center overflow-hidden">
      <div className="bg-black w-full -mt-96">
        <Player autoplay loop src={waveAnimation} />
      </div>

      <div className="absolute bottom-1/2 w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll font-clash">
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mx-6">
            Frontend Developer
          </h1>
          <h1 className="text-purple-400 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mx-6">
            Frontend Developer
          </h1>
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mx-6">
            Frontend Developer
          </h1>
          <h1 className="text-purple-400 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mx-6">
            Frontend Developer
          </h1>
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mx-6">
            Frontend Developer
          </h1>
          <h1 className="text-purple-400 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mx-6">
            Frontend Developer
          </h1>
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mx-6">
            Frontend Developer
          </h1>
          <h1 className="text-purple-400 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mx-6">
            Frontend Developer
          </h1>
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mx-6">
            Frontend Developer
          </h1>
          <h1 className="text-purple-400 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mx-6">
            Frontend Developer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
