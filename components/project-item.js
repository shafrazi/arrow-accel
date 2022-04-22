import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ProjectItem({ title, type, image, logo, link }) {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row my-6 lg:my-12">
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <Link href={link}>
          <p className="text-lg mt-3 md:mt-0 md:text-xl lg:text-3xl w-full md:w-10/12 lg:w-2/3 cursor-pointer">
            {title}
          </p>
        </Link>
        <div
          className="w-11/12 flex items-center justify-end py-2 md:py-2 lg:py-2"
          style={{ color: "#375aa9" }}
        >
          <Link href={link}>
            <div className="">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="hidden md:block md:w-7 lg:w-10 cursor-pointer"
              />
            </div>
          </Link>
        </div>
      </div>
      <Link href={link}>
        <div className="w-full md:w-1/2 relative cursor-pointer">
          <img src={image} className="w-full" />
          <div className="absolute bottom-[30%] w-full flex flex-col">
            <img src={logo} className="w-[25%]" />
          </div>
          <div
            className="absolute bottom-0 w-full flex flex-col justify-center items-center opacity-80 text-white text-base md:text-lg lg:text-xl py-2 md:py-3 lg:py-4"
            style={{ backgroundColor: "#375aa9" }}
          >
            <p className="w-11/12">{type}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
