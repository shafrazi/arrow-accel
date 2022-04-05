import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
function footerMobile() {
  return (
    <div
      className="bg-black py-10 flex flex-col"
      style={{
        fontFamily: "OpenSauceOne",
        fontWeight: "normal",
        lineHeight: 1,
      }}
    >
        <div className="px-10">
      <h6 className="text-white text-cxl text-4xl font-bold mt-6">
        Pushing
        <br /> limits.
      </h6>
      <img src="/images/logo-white.png" className="w-2/3 mt-20" />
      <div className=" mt-4 border border-white w-5/6"></div>
      <p className="text-white mt-4 text-xs md:text-lg">
        We are creative consultants, committed to
        <br /> accelerating projects and building value for
        <br /> our clients and the communities around us.
      </p>
      <p className="text-white uppercase text-xs mt-10">company</p>
      <p className="text-white uppercase text-xs mt-4">cases</p>
      <p className="text-white uppercase  text-xs mt-4">industries</p>
      </div>
      <p className="text-white uppercase text-xs mt-6 px-9">NEELY/ ARROW</p>
      <p className="text-white uppercase text-xs px-9 mt-4">K-LINE/ ARROW</p>
      <div className="text-blue-900 flex flex-row mt-8 px-9">
        <p className="text-white font-bold uppercase text-xs mt-1 ">
          Get to know us
        </p>
        <ArrowNarrowRightIcon className="w-5 ml-2  " />
      </div>
      <div className="flex flex-row justify-between">
        <div className="mr-20 px-5">
    {/*
          <p className="text-white mt-4 pr-4 text-xs ">INSTAGRAM</p>
    <p className="text-white text-xs mt-2 mr-6 ">LINKEDIN</p>*/}
    <div className="flex flex-col  items-start">
     <a class="text-white mr-3 mt-4 pr-4 text-xs ml-4"href="https://www.instagram.com/reel/Ca1iC4EA9S_/?utm_medium=share_sheet">INSTAGRAM</a>
    <a class="text-white text-xs mt-2 mr-11 md:mr-2 ml-4"href="https://www.linkedin.com/company/arrow-accel-agency/?viewAsMember=true">LINKEDIN</a>
       </div> </div>
        <div className="flex flex-col  items-end">
          <p className="text-white text-xxs mr-16 mt-5 ">PRIVACY POLICY</p>
          
          <p className="text-white text-xxs mt-2 mr-8 ">ARROW ACCEL 2O22 &copy;</p>
        </div>
      </div>
    </div>
  );
}

export default footerMobile;
