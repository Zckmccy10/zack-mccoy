import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto my-40 md:my-60 px-6 relative">
      <div className="flex items-center justify-evenly my-30">
        <div className="flex flex-col align-center justify-center z-10">
          <h2 className="text-6xl text-center font-handwrite lg:text-8xl font-black">
            Zack McCoy
          </h2>
          <h3 className="text-4xl text-center lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand to-white to-98%">
            IT Analyst and{" "}
            <span className="underline decoration-dashed decoration-white/10">
              Web Developer
            </span>
          </h3>
          <p className="text-md lg:text-xl text-center mt-10">
            A professional IT Analyst with web development skillsets. I mostly
            have a preference for web apps, but enjoy all things that have some
            front-end work. I have a Bachelor&apos;s Degree in Business
            Information Systems which helped to fuel my desire for programming.
          </p>
          <a href="mailto:zckmccy@gmail.com" className="mx-auto mt-10">
            <button className="text-lg font-bold w-min py-2 px-8 whitespace-nowrap bg-brand rounded-lg ">
              Contact Me
            </button>
          </a>
        </div>

        <img
          src="/zm-blue.png"
          className="opacity-10 w-[100%] md:w-[80%] absolute z-0"
        />
      </div>
    </div>
  );
};

export default Hero;
