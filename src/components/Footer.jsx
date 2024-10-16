import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import HeroImageFront from "../assets/hero-image-front.svg";
import HeroImageBack from "../assets/hero-image-back.svg";

const Footer = () => {

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
      <div className="h-screen flex justify-center items-center gap-10 p-20 bg-gradient-to-b from-[#D6F8FF] to-[#00C8F000] mt-20">
        <div className="">
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
            Get my cv <FiArrowUpRight />
          </button>
          <button className="w-48 h-16 bg-gradient-to-b from-buttonbglightblue to-buttonbgblue text-[1.5rem] rounded-xl text-white border border-dotted">
            {" "}
            Talk to me
          </button>
        </div>
      </div>
      <div className='flex pb-10'>
        <div className="text-2xl mx-auto">Olaoluwa ©2024All Rights Reserved</div>
      </div>
    </>
  );
}

export default Footer
