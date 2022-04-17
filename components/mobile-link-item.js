import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function MobileLinkItem({ title, children, targetLink }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full py-1 focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex w-full border-b-2 py-3">
          <p className="text-lg text-left font-bold w-11/12">{title}</p>
          <div className="w-1/12 flex flex-col justify-center items-center text-blue-500">
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`w-4 transform transition-transform duration-200 ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="pt-0">
          <div className="animate__animated animate__fadeInUp text-sm md:text-base py-4">
            {children}
            <div className="w-full mt-8 flex">
              <div className="w-1/2">
                {targetLink && (
                  <a
                    href={targetLink}
                    target="_blank"
                    className="flex w-full space-x-2 items-center"
                  >
                    <button className="text-[11px] border-black border-2 px-1 py-1 rounded border-solid">
                      Go to their website
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
