import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
function promoting12() {
  return (
    <div className="bg-black w-full py-16  flex text-sm flex-col items-center">
      <div className="text-white w-10">
        {" "}
        <FontAwesomeIcon icon={faThumbsUp} />
      </div>
      <p
        className="text-white uppercase mt-6 text-center lg:text-left" 
        style={{
          fontFamily: "OpenSauceOne",
          fontWeight: "normal",
          lineHeight: 1.6,
        }}
      >
        Promoting good ideas
      </p>
      <p
        className="text-white text-sm mt-4 text-center lg:text-left"
        style={{
          fontFamily: "OpenSauceOne",
          fontWeight: "normal",
          lineHeight: 1.6,
        }}
      >
        We promote products, ideas and companies,
        <br /> that inspire and prioritize the best interest of
        <br /> the world and the quality of peoples lives.
      </p>
      <p
        className="text-white text-sm mt-4 text-center lg:text-left"
        style={{
          fontFamily: "OpenSauceOne",
          fontWeight: "normal",
          lineHeight: 1.6,
        }}
      >
        We are set on delivering you the means to
        <br /> identify, inform, engage with and activating your <br />
        target audience. Our aim is to shorten, sharpen
        <br /> and refine the trajectory to your brightest goals
      </p>
      <div className="text-white w-10 mt-14">
        <FontAwesomeIcon icon={faBoltLightning} />
      </div>
      <p
        className="text-white uppercase text-center  mt-8 lg:text-left"
        style={{
          fontFamily: "OpenSauceOne",
          fontWeight: "normal",
          lineHeight: 1.6,
        }}
      >
        and accelerating progress
      </p>
      <p
        className="text-white text-center mt-6 lg:text-left"
        style={{
          fontFamily: "OpenSauceOne",
          fontWeight: "normal",
          lineHeight: 1.6,
        }}
      >
        Our decisions are based on data and research,
        <br /> leaning on our extensive experience, working for <br />
        companies and organizations who have their
        <br /> ambitions set beyond the horizon.
      </p>
      <p
        className="text-white text-center mt-6 lg:text-left"
        style={{
          fontFamily: "OpenSauceOne",
          fontWeight: "normal",
          lineHeight: 1.6,
        }}
      >
        We connect sharp minds to accelerate
        <br /> extraordinary development
      </p>
    </div>
  );
}

export default promoting12;
