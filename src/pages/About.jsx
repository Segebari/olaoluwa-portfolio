import React from 'react'
import Arsenal from "../assets/arsenal.svg";
import fav1 from "../assets/fav1.svg";
import fav2 from "../assets/fav2.svg";
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <div className="pt-20 text-center">
        <div className="bg-white p-4 flex">
          <div className='md:max-w-[50%] mx-auto'>
            <p className="text-red-500">
              Friday, Sep 27, 2024 <br /> 10:30:12 AM
            </p>
            <h2 className="text-4xl font-bold pt-3">About me</h2>
            <p className="text-[#888888] pt-5">
              I'm a passionate professional with 7+ years of experience as a
              senior web3 frontend developer, specializing in blockchain
              technology, NFTs, DeFi, DAOs, and decentralized browsers. My
              expertise spans both web2 and web3, with skills in backend
              development, DevOps, and app deployment. Beyond tech, football is
              my major passion, offering balance and energy to my life. This
              fusion of tech and football defines my journey.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center pt-10 gap-3">
              <img src={Arsenal} alt="" className="w-20 order-2" />
              <div className="lg:order-2">
                <p className="font-bold text-lg pt-3">Favourite Club</p>
                <p className="text-[#888888]">Arsenal Football Club</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 py-28 bg-[#ffd9d9] p-4">
          <h2 className="text-2xl font-bold">Favourite Listen at the Moment</h2>
          <div className="flex flex-col md:flex-row gap-3 pt-10 justify-center">
            <img src={fav1} alt="" className="rounded-xl h-60" />
            <img src={fav2} alt="" className='h-[16.9rem]' />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About