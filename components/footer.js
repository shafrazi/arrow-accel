import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MobileFooter from "./mobile-footer";

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
            style={{ height: "25vw" }}
          >
            <div className="flex flex-col w-10/12">
              <div className="flex w-full">
                <div className="flex flex-col w-3/12 py-3">
                  <img
                    src="/images/logo-white.png"
                    alt="logo"
                    className="w-full"
                  />
                  <div className="text-white mt-12 flex flex-col">
                    <div className="py-2 border-t-2 border-white">
                      <p className="text-xs">
                        We are creative consultants, committed to accelerating
                        projects and building value for our clients and the
                        communities around us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-2/12"></div>
                <div className="flex w-7/12 text-white text-sm">
                  <div className="flex w-1/4 uppercase">
                    <ul>
                      <li className="py-2">
                        <a href="/company">company</a>
                      </li>
                      <li className="py-2">
                        <a href="/about-us">cases</a>
                      </li>
                      <li className="py-2">
                        <a href="/industries">industries</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex w-1/4 uppercase">
                    <ul>
                      <li className="py-2">
                        <a href="/company">neely/ arrow</a>
                      </li>
                      <li className="py-2">
                        <a href="/about-us">k-line/ arrow</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex w-1/2 uppercase justify-center">
                    <ul>
                      <li className="py-2">
                        <div className="w-full flex text-center font-bold">
                          <a href="/contact">Get to know us</a>
                          <div className="flex flex-col justify-center items-center text-blue-500">
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="w-4 mx-3"
                            />
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <a
                          href="https://www.instagram.com/arrow.accel.agency/"
                          target="blank"
                        >
                          instagram
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          href="https://www.linkedin.com/company/arrow-accel-agency/"
                          target="blank"
                        >
                          linkedin
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full text-white flex">
                <div className="flex flex-col w-3/12 py-3">
                  © ARROW ACCEL 2022
                </div>
                <div className="w-2/12"></div>
                <div className="flex w-7/12 text-white text-sm items-center">
                  <a href="/company">PRIVACY POLICY</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <footer className="lg:hidden bg-black text-white">
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
                    <li className="py-2">
                      <a href="/about-us">About us</a>
                    </li>
                    <li className="py-2">
                      <a href="/about-us">Our partners</a>
                    </li>
                    <li className="py-2">
                      <a href="/our-focus">Our focus</a>
                    </li>
                  </ul>
                </div>
                <div className="flex w-full">
                  <ul>
                    <li className="py-2">
                      <a href="/contact">Get to know us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      <MobileFooter />
    </div>
  );
}
