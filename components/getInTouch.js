import Link from "next/link";
import React from "react";

function getInTouch() {
  return (
    <div className="flex w-full justify-center items-center bg-white">
      <div className="w-11/12 flex px-2 py-6 md:py-10 lg:py-16 lg:px-4">
        <div className="flex flex-col w-full py-16 tracking-wide bg-white">
          <h1
            className="text-black text-2xl md:text-4xl "
            style={{
              fontFamily: "OpenSauceOne",
              fontWeight: "normal",
              lineHeight: 1.6,
            }}
          >
            Get in Touch
          </h1>
          <div className="flex flex-col md:flex-row mt-6 md:mt-10">
            <div className="flex flex-row w-full md:w-1/2 text-lg md:text-xl lg:text-2xl">
              <h1 className="mt-4 w-1/3">HQ</h1>

              <p className="w-2/3 mt-4">
                Keizersgracht 391-A
                <br /> 1016 EJ Amsterdam
                <br />
                The Netherlands
              </p>
            </div>
            <div className="w-full flex flex-col md:w-1/3">
              <Link href="tel:0031625283072">
                <button className="flex items-center justify-center uppercase border border-double-2 text-black border-black  mt-20 md:mt-5 px-8 p-2 w-full lg:w-4/5">
                  Schedule a call
                </button>
              </Link>
              <Link href="mailto:agency@arrowaccel.com">
                <button className="flex items-center justify-center uppercase border border-double-2 text-black border-black  mt-6 px-8 p-2 w-full lg:w-4/5">
                  Send us an email
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default getInTouch;
