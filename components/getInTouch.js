import React from "react";

function getInTouch() {
  return (
    <div className="flex w-full justify-center items-center bg-white">
      <div className="w-10/12 flex lg:w-10/12 py-6 md:py-10 lg:py-16 px-4 md:px-10 lg:px-0">
        <div className="flex flex-col w-full py-16 tracking-wide bg-white">
          <h1
            className="text-black lg:text-4xl "
            style={{
              fontFamily: "OpenSauceOne",
              fontWeight: "normal",
              lineHeight: 1.6,
            }}
          >
            Get in Touch
          </h1>
          <div className="flex flex-col lg:flex-row">
             
          <div className="flex flex-row w-2/3">
            <h1 className="text-gray-800  mt-4 w-1/3">HQ</h1>

            <p className="w-2/3 mt-4">
              Keizersgracht 391-A
              <br /> 1016 EJ Amsterdam
              <br />
              The Netherlands
            </p>
          </div>
          <div className="w-full flex flex-col lg:w-1/2">
            <button className="flex items-center justify-center uppercase border border-double-2 text-gray-600 border-gray-800  mt-20 lg:mt-5 px-8 p-2 w-full lg:w-4/5">
              Schedule a call
            </button>
            <button
              className="flex items-center justify-center uppercase border border-double-2 text-gray-600 border-gray-800  mt-6
       px-8 p-2 w-full  lg:w-4/5"
            >
              Send us an email
            </button>
          </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default getInTouch;
