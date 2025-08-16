import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-black w-full min-h-[50vh] flex items-end justify-center overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full"
      >
        <path
          fill="#9333ea"
          fillOpacity="1"
          d="M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,176C672,171,768,213,864,197.3C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="absolute bottom-[10%] w-full overflow-hidden">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
