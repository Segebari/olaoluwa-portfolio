import React from 'react'
import curve from "../assets/curve-image.svg";

const Logos = () => {
  return (
    <>
      <div className=" text-center md:text-start md:pl-24 text-4xl flex gap-20 items-center pb-10">
        Preferred By Industry Leaders <img src={curve} alt="" className='hidden md:block' />
      </div>
      <div className="h-48 w-full bg-black border border-dotted"></div>
    </>
  );
}

export default Logos