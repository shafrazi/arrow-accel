import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function TeamDisclosure({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full md:w-1/5">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full py-1 focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex w-full border-b-2 border-black py-3">
            <p className="text-lg lg:uppercase lg:text-2xl text-left font-bold w-11/12">
              {title}
            </p>
            <div className="w-1/12 flex flex-col justify-center items-center text-blue-500">
              <FontAwesomeIcon
                icon={faArrowRight}
                className={`w-7 transform transition-transform duration-200 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </div>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="pt-0">
          <div className="animate__animated animate__fadeInUp text-sm md:text-base py-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
