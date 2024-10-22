import React, { useState } from "react";
import WorkVector from "../assets/work-vector.svg";
// logos
import masq from "../assets/masq.svg";
import jcp from "../assets/jcp.svg";
import monkey from "../assets/monkeydoo.svg";
import unifty from "../assets/unifty.svg";
import naffiti from "../assets/naffiti.svg";


const WorkHistory = () => {

  // const [IsVisible, setIsVisible] = useState[false];

  

  return (
    <>
      <div className="flex flex-col pt-20 bg-worksectionbg">
        <div className="mx-auto lg:mx-0 lg:pl-24 text-3xl relative w-fit">
          Work History
          <div className="absolute top-[-1rem] right-[-2rem]">
            <img src={WorkVector} alt="" />
          </div>
        </div>

        <div className="mt-10 w-[90%] md:w-[90%] lg:w-[80%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="border group bg-white hover:bg-worklightblue  border-dotted border-workborder hover:border-workblue p-3 rounded-2xl lg:w-1/2">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-lg font-medium">
                    Senior Web3 Full-Stack Developer
                  </h4>
                  <p className="text-workgrey">MASQ, New Zealand, Remote</p>
                </div>
                <div className="text-sm p-3 h-14 bg-workdateblue group-hover:bg-workdatedarkblue group-hover:border-2 group-hover:border-dotted group-hover:border-workdateborderblue grid place-items-center rounded-xl font-medium">
                  Sept 2022 - Present
                </div>
              </div>
              <div className="pt-5">
                <div className="flex items-center gap-3">
                  <h4 className="text-workblue font-medium text-lg">
                    DVPN Extension
                  </h4>
                  <img
                    src={masq}
                    alt=""
                    className="w-14 hidden group-hover:block opacity-40 hover:opacity-100 hover:scale-125 transition-transform duration-300"
                  />
                </div>

                <p className="">
                  Developed a feature-rich Chromium extension designed to
                  enhance web security and browsing experience. The extension
                  integrates seamlessly with the Chrome browser, providing users
                  with innovative functionalities and a user-friendly interface.
                </p>
              </div>

              <div className="pt-5">
                <div className="flex items-center gap-3">
                  <h4 className="text-workblue font-medium text-lg">BROWSER</h4>
                  <img
                    src={masq}
                    alt=""
                    className="w-14 hidden group-hover:block opacity-40 hover:opacity-100 hover:scale-125 transition-transform duration-300"
                  />
                </div>
                <p>
                  Developed a feature-rich Chromium extension designed to
                  enhance web security and browsing experience. The extension
                  integrates seamlessly with the Chrome browser, providing users
                  with innovative functionalities and a user-friendly interface.
                </p>
              </div>
            </div>
            <div className="border bg-white hover:border-[#db6b8b] hover:bg-[#f9e7f2] group  border-dotted border-workborder group rounded-2xl p-3 lg:w-1/2">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-lg font-medium">
                    Technical Lead Senior Web3 <br /> Full-stack Developer
                  </h4>
                  <div className="flex items-center gap-3">
                    <p className="text-workgrey">MonkeyDoo, United States,</p>
                    <img
                      src={monkey}
                      alt=""
                      className="w-7 hidden group-hover:block opacity-30 hover:opacity-100 hover:scale-125 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="text-sm px-3 h-14 bg-workdatedarkpink group-hover:bg-[#f7d6e9] group-hover:border-2 group-hover:border-dotted group-hover:border-[#db6b8b] grid place-items-center rounded-xl font-medium">
                  March 2022 - Sept 2022
                </div>
              </div>
              <div>
                <p className="pt-5">
                  Developed a scalable NFT marketplace using blockchain and
                  Solidity smart contracts.
                </p>
                <p className="pt-5">
                  Integrated Ethereum and IPFS for decentralized storage.
                </p>
                <p className="pt-5">
                  Built core features: authentication, wallet integration, NFT
                  minting, and auctions.
                </p>
                <p className="pt-5">
                  Designed a user-friendly interface with modern frameworks
                  (React, Angular, Vue.js).
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 mt-10">
            <div className="border bg-white hover:bg-[#e8d9f0] group border-dotted border-workborder hover:border-[#7248db] p-3 rounded-2xl lg:w-1/2">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-lg font-medium">
                    Web3 Frontend Developer
                  </h4>
                  <div className="flex items-center gap-3">
                    <p className="text-workgrey">Unifty, Hungary</p>
                    <img
                      src={unifty}
                      alt=""
                      className="w-7 hidden group-hover:block opacity-40 hover:opacity-100 hover:scale-125 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="text-sm px-3 h-14 bg-[#E2C9DD] group-hover:bg-[#d9c5e7] group-hover:border-2 group-hover:border-dotted group-hover:border-[#7248db] grid place-items-center rounded-xl font-medium">
                  Sept 2021 - March 2022
                </div>
              </div>
              <div>
                <p className="pt-5">
                  Built an NFT Gallery Application using HTML, Custom CSS, and
                  JavaScript as the Major Frontend Technology.
                </p>
                <p className="pt-5">
                  Integrated Web3 package to communicate with the Smart Contract
                  Craft compelling messages for social media channels and
                  analyze user behaviors to improve engagement and conversion
                  metrics.
                </p>
                <p className="pt-5">
                  Developed the application's backend in PHP and prepared the
                  REST API for the front end, which was used to connect to the
                  MYSQL database.
                </p>
              </div>
            </div>
            <div className="border bg-white hover:border-[#D9D5C9] hover:bg-[#EFEEDD] group border-dotted border-workborder rounded-2xl p-3 lg:w-1/2">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xl font-medium">
                    Web3 Front-end Developer
                  </h4>
                  <p className="text-workgrey">
                    Payvest, Nigeria(biko-fund.web)
                  </p>
                </div>
                <div className="text-sm font-medium bg-[#EFEEDD] group-hover:bg-[#D9D5C9] group-hover:border-2 group-hover:border-dotted group-hover:border-[#EFEEDD] px-3 h-14 grid place-items-center rounded-xl">
                  May 2021 - Sept 2021
                </div>
              </div>
              <div className="">
                <p className="pt-5">
                  Built a crowd funding application with Vue.js and Material UI.
                  Managed the data using Vuex by working on Node.js APIs to
                  fetch the data from the MySQL database using Nodejs, Express
                  and Sequelize.
                </p>
                <p className="pt-5">
                  Built a utility payment solution application that makes it
                  simple to conduct cash related transactions even with just a
                  phone number which helped to reduce the company's extra
                  charges by 20%
                </p>
              </div>
            </div>
          </div>
          <div className="border bg-white group border-dotted hover:border-[#10f500] md:h-80 border-workborder p-3 md:p-7 rounded-2xl mt-10">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="md:w-[30%] flex flex-row md:flex-col">
                <div className="mb-5">
                  <h4 className="text-lg font-medium">Full-stack Developer</h4>
                  <p className="text-workgrey">
                    JCP NETCONSULT Limited, Nigeria
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-sm bg-[#EFEEDD] px-3 w-fit h-14 grid place-items-center rounded-xl font-medium">
                    May 2017 - May 2021
                  </div>
                  <img
                    src={jcp}
                    alt=""
                    className="w-14 hidden group-hover:block opacity-40 hover:opacity-100 hover:scale-125 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="md:w-[70%] text-base lg:text-xl">
                Developed a web application to handle industrial requests as a
                full-stack developer Integrated Rest API with the React frontend
                Integrated PHP and MySql Rest APIs with the React Frontend and
                tested with POSTMAN Increased company's mobile traffic by 40%
                Created models and schemas for database persistence
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkHistory;
