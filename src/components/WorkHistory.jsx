import React from "react";
import WorkVector from "../assets/work-vector.svg";

const WorkHistory = () => {
  return (
    <>
      <div className="flex flex-col pt-20 bg-worksectionbg">
        <div className="mx-auto md:text-start md:pl-24 text-3xl relative w-fit">
          Work History
          <div className="absolute top-[-1rem] right-[-2rem]">
            <img src={WorkVector} alt="" />
          </div>
        </div>

        <div className="mt-10 w-[90%] md:w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="border-2 md:border-4 bg-white border-dotted border-workborder p-3 rounded-2xl md:w-1/2">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-lg font-medium">
                    Senior Web3 Full-Stack Developer
                  </h4>
                  <p className="text-workgrey">MASQ, New Zealand, Remote</p>
                </div>
                <div className="text-sm p-3 h-14 bg-workdateblue grid place-items-center rounded-xl ">
                  Sept 2022 - Present
                </div>
              </div>
              <div className="pt-5">
                <h4 className="text-workblue">DVPN Extension</h4>
                <p className="">
                  Developed a feature-rich Chromium extension designed to
                  enhance web security and browsing experience. The extension
                  integrates seamlessly with the Chrome browser, providing users
                  with innovative functionalities and a user-friendly interface.
                </p>
              </div>

              <div className="pt-5">
                <h4 className="text-workblue">DVPN Extension</h4>
                <p>
                  Developed a feature-rich Chromium extension designed to
                  enhance web security and browsing experience. The extension
                  integrates seamlessly with the Chrome browser, providing users
                  with innovative functionalities and a user-friendly interface.
                </p>
              </div>
            </div>
            <div className="border-2 md:border-4 bg-white border-dotted border-workborder rounded-2xl p-3 md:w-1/2">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-lg font-medium">
                    Technical Lead Senior Web3 <br /> Full-stack Developer
                  </h4>
                  <p className="text-workgrey">MonkeyDoo, United States,</p>
                </div>
                <div className="text-sm px-3 h-14 bg-workdatedarkpink grid place-items-center rounded-xl">
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

          <div className="flex flex-col md:flex-row gap-5 mt-10">
            <div className="border-2 md:border-4 bg-white border-dotted border-workborder p-3 rounded-2xl md:w-1/2">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-lg font-medium">
                    Web3 Frontend Developer
                  </h4>
                  <p className="text-workgrey">Unifty, Hungary</p>
                </div>
                <div className="text-sm px-3 h-14 bg-[#E2C9DD] grid place-items-center rounded-xl">
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
            <div className="border-2 md:border-4 bg-white border-dotted border-workborder rounded-2xl p-3 md:w-1/2">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-lg font-medium">
                    Web3 Front-end Developer
                  </h4>
                  <p className="text-workgrey">
                    Payvest, Nigeria(biko-fund.web)
                  </p>
                </div>
                <div className="text-sm bg-[#EFEEDD] px-3 h-14 grid place-items-center rounded-xl">
                  May 2021 - Sept 2021
                </div>
              </div>
              <div>
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
          <div className="border-2 md:border-4 bg-white border-dotted md:h-80 border-workborder p-3 md:p-7 rounded-2xl mt-10">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="md:w-[30%] flex flex-row md:flex-col">
                <div className="">
                  <h4 className="text-lg font-medium">Full-stack Developer</h4>
                  <p className="text-workgrey">
                    JCP NETCONSULT Limited, Nigeria
                  </p>
                </div>

                <div className="text-sm bg-[#EFEEDD] px-3 w-fit h-14 grid place-items-center rounded-xl">
                  May 2017 - May 2021
                </div>
              </div>
              <div className="md:w-[70%] text-xl">
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
