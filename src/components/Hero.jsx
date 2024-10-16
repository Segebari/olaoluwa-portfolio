import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import HeroImageFront from "../assets/hero-image-front.svg"
import HeroImageBack from "../assets/hero-image-back.svg"
import HeroIcon from "../assets/hero-icon.svg"

const Hero = () => {

    const backgroundStyle = {
      backgroundImage: `url(${HeroImageFront})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    const backgroundStyle2 = {
      backgroundImage: `url(${HeroImageBack})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };


  return (
    <>
      <div className="flex flex-col md:flex-row pl-24 pt-36 pb-40">
        <div className="">
          <div className="w-52 relative">
            <div className="h-56 w-44" style={backgroundStyle}></div>
            <div
              className=" h-56 w-44 absolute top-24 left-8"
              style={backgroundStyle2}
            ></div>
          </div>
        </div>
        <div className="pl-10 max-w-3xl">
          <div className="relative">
            <h3 className="text-4xl text-textgrey relative z-10">
              I AM OLAOLUWA A SOFTWARE DEVELOPER
            </h3>
            <img src={HeroIcon} alt="" className="absolute top-[-3.75rem] right-[0rem]" />
          </div>

          <p className="text-2xl pt-3 pr-24">
            Enthusiastic professional with 7 years of experience, driven by new
            challenges, creative solutions, and building connections. Currently
            a Senior Full Stack Web3 Engineer at{" "}
            <span className="hover:text-navhover">Masqbrowser.</span>
          </p>
          <div className="flex flex-col md:flex-row mt-5 gap-10">
            <button className="flex items-center gap-3 w-48 h-16 bg-buttonbgdark justify-center text-[1.6rem] text-textgrey border border-dotted rounded-xl">
              Get my cv <FiArrowUpRight />
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
