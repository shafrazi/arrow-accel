import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../app-context";
import MobileMenu from "./mobile-menu";
import Headroom from "react-headroom";

export default function Header() {
  const { setIsOpen } = useContext(AppContext);
  return (
    <div>
      <Headroom>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-4 md:py-12 dark:bg-gray-800 w-full">
          <div className="flex flex-wrap justify-between items-center mx-auto w-11/12 md:w-11/12">
            <a href="/" className="flex w-1/3 space-x-8">
              <img
                src="/images/logo1.png"
                alt="Logo"
                className=""
                width="300"
              />
            </a>
            {/* <MobileMenu /> */}
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-[8px] md:text-[15px] text-black rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              MENU
              <img src="/images/equal.png" className="ml-2 w-6 md:w-10" />
            </button>
            <div className="hidden w-full lg:block md:w-auto" id="mobile-menu">
              <ul
                className="flex flex-col mt-4 md:flex-row md:space-x-10 lg:space-x-[70px] md:mt-0 md:text-sm"
                style={{ fontFamily: "OpenSauceOne", fontWeight: "normal" }}
              >
                <li>
                  <a
                    href="/company"
                    className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base"
                  >
                    COMPANY
                  </a>
                </li>
                <li>
                  <Link href="/projects">
                    <a className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base">
                      PROJECTS
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="/causes"
                    className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base"
                  >
                    CAUSES
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-base"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Headroom>
      <MobileMenu />
    </div>
  );
}
