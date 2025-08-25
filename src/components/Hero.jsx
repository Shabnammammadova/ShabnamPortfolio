import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import waveAnimation from "../assets/gif/Wave Loop.json";

const Hero = () => {
  return (
    <div className="relative bg-black w-full min-h-[50vh] flex items-end justify-center overflow-hidden">
      {/* Wave animation */}
      <div className="bg-black w-full -mt-40 sm:-mt-60 md:-mt-80">
        <Player autoplay loop src={waveAnimation} />
      </div>

      {/* Text scroll */}
      <div className="absolute bottom-1/2 w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll font-clash">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <h1
                key={i}
                className={`${
                  i % 2 === 0 ? "text-white" : "text-purple-400"
                } text-sm xs:text-base sm:text-2xl md:text-4xl lg:text-5xl font-bold mx-4`}
              >
                Frontend Developer
              </h1>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
