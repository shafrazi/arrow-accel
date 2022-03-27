import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

export default function Footer({
  backgroundComponent,
  imageOverText,
  showIcon,
  fontSize,
}) {
  return (
    <div style={{ fontFamily: "OpenSauceOne" }}>
      <footer className="hidden lg:block">
        <div className="w-full relative">
          {backgroundComponent}
          <div className="w-full flex absolute bottom-2/3">
            <div className="w-1/2 flex justify-center items-center">
              <p
                className="w-11/12 text-white font-bold px-12"
                style={{ fontSize: fontSize || "5vw" }}
              >
                {imageOverText}
              </p>
            </div>
          </div>
          <div
            className={`w-full flex absolute ${showIcon ? "block" : "hidden"}`}
            style={{ bottom: "55%", right: "5%" }}
          >
            <div className="w-1/2 flex justify-center items-center">
              <img
                src="/images/logo-icon-white-crop.png"
                alt="logo-icon"
                className="w-6/12 opacity-20"
              />
            </div>
          </div>
          <div
            className="flex justify-center items-center bg-black opacity-80 w-full absolute bottom-0 left-0"
            style={{ height: "20vw" }}
          >
            <div className="flex w-10/12">
              <div className="md:w-1/2 lg:w-1/4 py-3">
                <img
                  src="/images/logo-white.png"
                  alt="logo"
                  className="w-full"
                />
              </div>
              <div className="w-1/4"></div>
              <div className="flex w-2/3 text-white text-xl">
                <div className="flex w-1/2 items-center">
                  <ul>
                    <li className="py-2">About us</li>
                    <li className="py-2">Our partners</li>
                    <li className="py-2">Our focus</li>
                  </ul>
                </div>
                <div className="flex w-1/2 py-2">
                  <div className="">
                    <div className="w-full flex font-bold items-center">
                      <a href="">Get to know us</a>
                      <p>
                        <ArrowNarrowRightIcon className="mx-3 w-10" />
                      </p>
                    </div>
                  </div>
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
