import Image from "next/image";
import GetToKnowBannerImg from "../public/images/get-to-know-banner-image.png";

export default function GetToKnowBanner() {
  return (
    <div className="flex w-full relative">
      <div className="w-1/2"></div>
      <div
        className="relative w-1/2 bg-gray-200 flex flex-col justify-center items-center text-xl tracking-wide py-[13rem] px-[8rem] mr-[10rem]"
        style={{ fontWeight: "normal" }}
      >
        <div className="absolute -left-[51rem]">
          <Image src={GetToKnowBannerImg} width={864} height={576} />
        </div>
        <p className="">
          We are lateral thinkers that provide expert advice and bold ideas, the
          people and the tools to create real-life results.
        </p>
        <p className="mt-6">
          Our experience, knowledge and ability to quickly grasp complex matter
          and theory, accelerates creative design and your go-to-market
          trajectory. We work systematically, with deep understanding on how
          projects and ideas are financed, structured and redistributed.
        </p>
        <button className="bg-red-900 mt-6 text-white uppercase px-4 py-2 rounded text-lg">
          Get to know us
        </button>
      </div>
    </div>
  );
}
