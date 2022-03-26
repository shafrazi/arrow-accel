import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

export default function Footer({ backgroundComponent, imageOverText }) {
  return (
    <div style={{ fontFamily: "OpenSauceOne" }}>
      <footer className="hidden lg:block">
        <div className="flex flex-col w-full bg-opacity-50 relative">
          <div
            className="w-full flex flex-col px-[5rem] absolute"
            style={{ bottom: "70%" }}
          >
            <div className="w-3/12 px-10 relative">
              <img
                src="/images/logo-icon-white-crop.png"
                alt="logo-icon"
                className="w-10/12 opacity-20 absolute -top-[4rem]"
              />
              <h1 className="w-full xmd:text-3xl font-semibold text-white lg:text-5xl">
                {imageOverText}
              </h1>
            </div>
          </div>
          {backgroundComponent}

          <div className="flex bg-black opacity-80 w-full h-10 md:h-20 lg:h-[20rem] absolute bottom-0 left-0 lg:py-[6rem]">
            <div className="md:w-1/2 lg:w-1/3 mx-20">
              <img src="/images/logo-white.png" alt="logo" width="400" />
            </div>
            <div className="flex w-2/3 text-white text-2xl mx-12">
              <div className="flex w-1/2">
                <ul>
                  <li className="py-2">About us</li>
                  <li className="py-2">Our partners</li>
                  <li className="py-2">Our focus</li>
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
      </footer>
      <footer className="lg:hidden bg-black text-white mt-10">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <div>
                  <a
                    href="/"
                    className="text-xl font-bold text-gray-800 hover:text-gray-700"
                  >
                    <img
                      src="/images/logo-white.png"
                      alt="logo"
                      width={160}
                      className="rounded-lg shadow-lg"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex w-full">
                  <ul>
                    <li className="py-2">About us</li>
                    <li className="py-2">Our partners</li>
                    <li className="py-2">Our focus</li>
                  </ul>
                </div>
                <div className="flex w-full">
                  <ul>
                    <li className="py-2">Get to know us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
