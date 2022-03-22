import Image from "next/image";
import BannerImage from "../public/images/cta-banner.png";

export default function CallToActionBanner() {
  return (
    <div className="flex w-full relative">
      <Image src={BannerImage} height={800} />
      <div className="w-1/3 flex flex-col absolute bottom-[8rem] left-[5rem]">
        <p className="font-bold text-white text-5xl">
          The future is our canvas.
        </p>
        <div className="flex flex-col justify-center items-center bg-gray-300 w-full py-8 px-12 mt-10">
          <p className="uppercase text-2xl text-center tracking-wide leading-relaxed text-white opacity-100">
            The endless possibilities of metaverse: for brands
          </p>
          <button className="bg-red-900 mt-6 text-white uppercase px-4 py-2 rounded">
            Let's connect
          </button>
        </div>
      </div>
    </div>
  );
}
