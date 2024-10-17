import React from "react";
import thiscreete from "../assets/thiscraet.svg";
import zues from "../assets/zueswallet.svg";
import { FiArrowUpRight } from "react-icons/fi";

const Personalproject = () => {
  return (
    <>
      <div className="w-[90%] md:w-[80%] mx-auto mt-10">
        <div className="flex flex-col md:flex-row gap-5">
          <h2 className="text-4xl">Personal Project</h2>
          <div>image</div>
        </div>
        <div className="border-4 border-dotted h-auto border-workborder p-6 md:p-10 rounded-2xl mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Image */}
            <div className="md:order-1">
              <img src={thiscreete} alt="" className="w-full" />
            </div>

            {/* Paragraph */}
            <div className="md:col-span-2 md:text-xl md:order-2">
              Thiscreet is an application designed to facilitate anonymous and
              private communication. It allows users to send and receive
              encrypted messages, ensuring confidentiality and security. The
              platform emphasizes privacy, providing features that protect
              users' identities while allowing for seamless communication within
              trusted circles.
            </div>

            {/* Preview Button */}
            <div className="flex gap-3 items-center mt-6 text-4xl font-bold md:order-3">
              <div className="">Preview</div>
              <div className="font-normal">
                <FiArrowUpRight />
              </div>
            </div>
          </div>
        </div>

        <div className="border-4 border-dotted h-auto border-workborder p-6 md:p-10 rounded-2xl mt-10 bg-worklightblue">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Image */}
            <div className="md:order-1">
              <img src={zues} alt="" className="w-full" />
            </div>

            {/* Paragraph */}
            <div className="md:col-span-2 md:text-xl md:order-2">
              Zeus Wallet (ZuesPay) is a secure multi-currency wallet for
              storing, managing, and transacting cryptocurrencies. It features
              secure wallet creation (biometrics, MFA), crypto exchanges, and
              portfolio management. Bridging web2 and web3, it enables seamless
              DApp integrations for smooth web3 payments. Available on iOS,
              Android, and web, it supports major blockchains and offers
              user-friendly educational resources.
            </div>

            {/* Preview Button */}
            <div className="flex gap-3 items-center mt-6 text-4xl font-bold md:order-3">
              <div className="">Preview</div>
              <div className="font-normal">
                <FiArrowUpRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personalproject;