import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

export default function Footer({ backgroundImage, imageOverText }) {
  return (
    <div
    // className="w-full bg-center bg-cover h-[60rem] mt-12"
    // style={{
    //   backgroundImage: `url(${backgroundImage})`,
    // }}
    >
      <div className="flex flex-col w-full h-full bg-opacity-50 relative">
        <div className="absolute bottom-[47rem] left-[5rem]">
          <h1 className="text-4xl font-semibold text-white lg:text-5xl font-serif">
            {imageOverText}
          </h1>
        </div>
        <img src={backgroundImage} />
        <img
          src="/images/logo-icon-white.png"
          alt="logo-icon"
          width="680"
          className="opacity-20 absolute bottom-[25rem] left-[2rem]"
        />
        <div className="flex bg-black opacity-80 w-full h-[25rem] absolute bottom-0 left-0 py-[6rem]">
          <div className="w-1/3 mx-20">
            <img src="/images/logo-white.png" alt="logo" width="400" />
          </div>
          <div className="flex w-2/3 text-white text-2xl mx-12">
            <div className="flex w-1/2">
              <ul>
                <li className="py-2">About us</li>
                <li className="py-2">Our partners</li>
                <li className="py-2">Focus areas</li>
              </ul>
            </div>
            <div className="flex w-1/2 py-2">
              <div className="w-full flex font-bold">
                <a href="">Get to know us</a>
                {/* <ArrowNarrowRightIcon className="w-10" /> */}
                <p>
                  <ArrowNarrowRightIcon className="mx-3 w-10" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
