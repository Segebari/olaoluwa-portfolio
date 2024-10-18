import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import HeroImageFront from "../assets/hero-image-front.svg";
import HeroImageBack from "../assets/hero-image-back.svg";
import HeroIcon from "../assets/hero-icon.svg";

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${HeroImageFront})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 0.6s ease", // Add smooth transition
  };

  const backgroundStyle2 = {
    backgroundImage: `url(${HeroImageBack})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 0.6s ease", // Add smooth transition
  };

  const handleHover = () => {
    const frontImage = document.querySelector(".frontImage");
    const backImage = document.querySelector(".backImage");

    // Move front image to the bottom right (where back image is)
    frontImage.style.transform = "translate(34px, 95px)";

    // Move back image to the top left (where front image is)
    backImage.style.transform = "translate(-33px, -95px)";
  };

  const handleMouseLeave = () => {
    const frontImage = document.querySelector(".frontImage");
    const backImage = document.querySelector(".backImage");

    // Reset positions
    frontImage.style.transform = "translate(0, 0)";
    backImage.style.transform = "translate(0, 0)";
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:pl-24 pt-36 pb-20 md:pb-40 px-5 text-center items-center">
        <div
          className=""
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <div className="md:w-52 relative pb-32 md:pb-0">
            <div className="h-56 w-44 frontImage" style={backgroundStyle}></div>
            <div
              className="h-56 w-44 absolute top-24 left-8 backImage"
              style={backgroundStyle2}
            ></div>
          </div>
        </div>
        <div className="md:pl-10 md:max-w-3xl">
          <div className="relative">
            <h3 className="text-2xl md:text-4xl text-textgrey relative z-10">
              I AM OLAOLUWA A SOFTWARE DEVELOPER
            </h3>
            <img
              src={HeroIcon}
              alt=""
              className="absolute top-[-22rem] md:top-[-3.75rem] right-[0rem]"
            />
          </div>

          <p className="text-lg md:text-2xl pt-3 md:pr-24">
            Enthusiastic professional with 7 years of experience, driven by new
            challenges, creative solutions, and building connections. Currently
            a Senior Full Stack Web3 Engineer at{" "}
            <span className="hover:text-navhover">Masqbrowser.</span>
          </p>
          <div className="flex flex-col md:flex-row mt-5 gap-10 items-center md:items-start">
            <button className="flex items-center gap-3 w-48 h-16 bg-buttonbgdark justify-center text-[1.6rem] text-textgrey border border-dotted rounded-xl">
              Get my cv{" "}
              <div className="relative bottom-[-0.1rem]">
                <FiArrowUpRight />
              </div>
            </button>
            <button className="w-48 h-16 bg-gradient-to-b from-buttonbglightblue to-buttonbgblue text-[1.5rem] rounded-xl text-white border border-dotted">
              {" "}
              Talk to me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
