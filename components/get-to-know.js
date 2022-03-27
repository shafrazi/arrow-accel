import Image from "next/image";
import GetToKnowBannerImg from "../public/images/get-to-know-banner-image.png";

export default function GetToKnow() {
  return (
    <div className="relative">
      <div className="flex w-full relative">
        <div className="hidden lg:block w-1/2 z-10 relative"></div>
        <div className="w-full lg:w-1/2 lg:mr-20 bg-gray-200 flex flex-col justify-center items-center text-base md:text-lg lg:text-xl tracking-wide py-10 md:py-[3rem] lg:py-[13rem] px-5 md:px-10 lg:px-[8rem]">
          <div className="lg:hidden w-full">
            <img src="/images/get-to-know.png" className="w-full" />
          </div>
          <p className="mt-6 md:mt-12 lg:mt-0">
            We are lateral thinkers that provide expert advice and bold ideas,
            the people and the tools to create real-life results.
          </p>
          <p className="mt-6">
            Our experience, knowledge and ability to quickly grasp complex
            matter and theory, accelerates creative design and your go-to-market
            trajectory. We work systematically, with deep understanding on how
            projects and ideas are financed, structured and redistributed.
          </p>
          <button className="bg-red-500 mt-10 text-white uppercase px-4 py-2 rounded text-lg">
            Get to know us
          </button>
        </div>
      </div>
      <div className="hidden lg:block w-6/12 py-20 absolute top-10">
        <img src="/images/get-to-know.png" className="w-full" />
      </div>
    </div>
  );
}
