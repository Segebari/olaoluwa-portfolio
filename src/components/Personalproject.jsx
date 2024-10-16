import React from "react";
import thiscreete from "../assets/thiscraet.svg";
import zues from "../assets/zueswallet.svg";
import { FiArrowUpRight } from "react-icons/fi";

const Personalproject = () => {
  return (
    <>
      <div className="w-[80%] mx-auto mt-10">
        <div className="flex gap-5">
          <h2 className="text-4xl">Personal Project</h2>
          <div>image</div>
        </div>
        <div className="border-4 border-dotted h-80 border-workborder p-10 rounded-2xl mt-10">
          <div className="flex gap-5">
            <div className="w-[30%] flex flex-col">
              <img src={thiscreete} alt="" />
              <div className="flex gap-3 items-center mt-20 text-4xl font-bold">
                <div className="">Preview</div>
                <div className="font-normal">
                  <FiArrowUpRight />
                </div>{" "}
              </div>
            </div>
            <div className="w-[70%] text-xl">
              Thiscreet is an application designed to facilitate anonymous and
              private communication. It allows users to send and receive
              encrypted messages, ensuring confidentiality and security. The
              platform emphasizes privacy, providing features that protect
              users' identities while allowing for seamless communication within
              trusted circles.
            </div>
          </div>
        </div>

        <div className="border-4 border-dotted h-80 border-workborder p-10 rounded-2xl mt-10 bg-worklightblue">
          <div className="flex gap-5">
            <div className="w-[30%] flex flex-col">
              <img src={zues} alt="" />
              <div className="flex gap-3 items-center mt-20 text-4xl font-bold">
                <div className="">Preview</div>
                <div className="font-normal">
                  <FiArrowUpRight />
                </div>{" "}
              </div>
            </div>
            <div className="w-[70%] text-xl">
              Zeus Wallet (ZuesPay) is a secure multi-currency wallet for
              storing, managing, and transacting cryptocurrencies. It features
              secure wallet creation (biometrics, MFA), crypto exchanges, and
              portfolio management. Bridging web2 and web3, it enables seamless
              DApp integrations for smooth web3 payments. Available on iOS,
              Android, and web, it supports major blockchains and offers
              user-friendly educational resources.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personalproject;
