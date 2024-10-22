import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import HeroImageFront from "../assets/hero-image-front.svg";
import HeroImageBack from "../assets/hero-image-back.svg";

const Footer = () => {

    const backgroundStyle = {
      backgroundImage: `url(${HeroImageFront})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "transform 0.6s ease",
    };

    const backgroundStyle2 = {
      backgroundImage: `url(${HeroImageBack})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "transform 0.6s ease",
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
      <div className="h-fit md:h-[36rem] flex flex-col md:flex-row justify-center items-center gap-10 p-20 bg-gradient-to-b from-[#D6F8FF] to-[#00C8F000]">
        <div
          className="hidden md:block"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-52 relative">
            <div className="h-56 w-44" style={backgroundStyle}></div>
            <div
              className=" h-56 w-44 absolute top-24 left-8"
              style={backgroundStyle2}
            ></div>
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-10">
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
      <div className="flex pb-10 text-center ">
        <div className="md:text-2xl mx-auto">
          Olaoluwa ©2024. All Rights Reserved
        </div>
      </div>
    </>
  );
}

export default Footer
