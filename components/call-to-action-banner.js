import Image from "next/image";
import BannerImage from "../public/images/cta-banner.png";

export default function CallToActionBanner() {
  return (
    <div
      className="flex w-full bg-center bg-cover h-60 md:h-[30rem] lg:h-[40rem] relative"
      style={{
        backgroundImage: "url(/images/cta-banner.png)",
      }}
    >
      {/* <Image src={BannerImage} height={800} /> */}
      <div className="px-4 md:px-0 w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center md:absolute md:bottom-[8rem] md:left-[5rem]">
        <p className="font-bold text-white text-xl md:text-3xl lg:text-5xl">
          The future is our canvas.
        </p>
        <div className="flex flex-col justify-center items-center bg-gray-300 w-full px-4 py-5 lg:py-8 lg:px-12 mt-4 lg:mt-10">
          <p className="uppercase text-lg md:text-xl lg:text-3xl text-center tracking-wide leading-relaxed text-white opacity-100">
            The endless possibilities
          </p>
          <p className="uppercase text-lg md:text-xl lg:text-3xl text-center tracking-wide leading-relaxed text-white opacity-100">
            of metaverse: for brands
          </p>
          <button className="bg-red-500 mt-6 text-white uppercase px-4 py-2 rounded tracking-wide">
            Let's connect
          </button>
        </div>
      </div>
    </div>
  );
}
