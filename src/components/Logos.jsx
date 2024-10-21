import React from "react";
import curve from "../assets/curve-image.svg";
// logos
import masq from "../assets/masq.svg";
import jcp from "../assets/jcp.svg";
import monkey from "../assets/monkeydoo.svg";
import unifty from "../assets/unifty.svg";
import naffiti from "../assets/naffiti.svg";

const logos = [
  { src: masq, alt: "Masq" },
  { src: jcp, alt: "JCP" },
  { src: monkey, alt: "MonkeyDoo" },
  { src: unifty, alt: "Unifty" },
  { src: naffiti, alt: "Naffiti" },
];

const Logos = () => {
  return (
    <>
      <div className="">
        <div className="md:pl-14 lg:pl-24 text-4xl flex gap-20 items-center justify-center md:justify-normal pb-10">
          <h2 classname="">Preferred By Industry Leaders</h2>
          <img src={curve} alt="" className="hidden md:block" />
        </div>
        <div className="w-full bg-black py-12 relative overflow-hidden">
          <div className="logo-slider">
            <div className="logo-slide-track">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div key={index} className="logo-slide">
                  <div className="relative group h-20 flex justify-center items-center bg-black overflow-visible">
                    <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-auto h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-slider {
          height: 100px;
          position: relative;
          overflow: hidden;
          background: black;
        }

        .logo-slide-track {
          display: flex;
          width: calc(200px * ${logos.length * 3});
          animation: slide 30s linear infinite;
        }

        .logo-slide {
          width: 200px;
          padding: 0 20px;
          flex-shrink: 0;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-200px * ${logos.length}));
          }
        }
      `}</style>
    </>
  );
};

export default Logos;
