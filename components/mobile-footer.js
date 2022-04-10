import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
function MobileFooter({ topImage, mobileTitleText }) {
  return (
    <div
      className="w-full lg:hidden bg-black py-10 flex flex-col items-center"
      style={{
        fontFamily: "OpenSauceOne",
        fontWeight: "normal",
        lineHeight: 1,
      }}
    >
      {topImage ? (
        <div className="w-full">
          <img
            src={topImage}
            className="w-full h-screen md:h-[60vh] object-cover"
          />
        </div>
      ) : (
        ""
      )}
      <div className="w-9/12">
        <h6
          className="text-white text-4xl md:text-6xl font-bold mt-6"
          style={{ lineHeight: 1.4 }}
        >
          {mobileTitleText}
        </h6>
        <a href="/">
          <img src="/images/logo-white.png" className="w-2/3 mt-20" />
        </a>
        <div className="mt-4 border border-white w-5/6"></div>
        <div className="text-white mt-4 text-xs leading-normal">
          <p>
            We are creative consultants, committed to accelerating projects and
            building value for our clients and the communities around us.
          </p>
        </div>

        <p className="text-white uppercase text-xs mt-10">
          <a href="/company">company</a>
        </p>
        <p className="text-white uppercase text-xs mt-4">
          <a href="/causes">causes</a>
        </p>
        <p className="text-white uppercase  text-xs mt-4">
          <a href="/company#projects">projects</a>
        </p>
      </div>
      <div className="w-9/12">
        <p className="text-white uppercase text-xs mt-6">NEELY/ ARROW</p>
        <p className="text-white uppercase text-xs mt-4">K-LINE/ ARROW</p>
        <div className="text-blue-900 flex flex-row mt-8">
          <p className="text-white font-bold uppercase text-xs mt-1 ">
            <a href="/contact">Get to know us</a>
          </p>
          <ArrowNarrowRightIcon className="w-5 ml-2" />
        </div>

        <div className="flex flex-row justify-between">
          <div className="">
            <div className="flex flex-col  items-start">
              <a
                className="text-white mt-4 text-xs"
                href="https://www.instagram.com/reel/Ca1iC4EA9S_/?utm_medium=share_sheet"
              >
                INSTAGRAM
              </a>
              <a
                className="text-white text-xs mt-2 md:mr-2"
                href="https://www.linkedin.com/company/arrow-accel-agency/?viewAsMember=true"
              >
                LINKEDIN
              </a>
            </div>{" "}
          </div>
          <div className="flex flex-col items-end">
            <p className="text-white text-xxs mt-5 ">PRIVACY POLICY</p>

            <p className="text-white text-xxs mt-2">ARROW ACCEL 2O22 &copy;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;
