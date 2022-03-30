import Image from "next/image";
import SlideTopText from "./slide-top-text";

export default function CanvasBanner() {
  return (
    <div className="w-full flex-flex-col">
      <SlideTopText>
        <p className="" style={{ lineHeight: 1.6 }}>
          Our agency acts as a system of thinkers{" "}
        </p>
        <p className="" style={{ lineHeight: 1.6 }}>
          that creatively connects the dots and{" "}
        </p>
        <p className="" style={{ lineHeight: 1.6 }}>
          energizes impactful ideas.{" "}
        </p>
        <p className="" style={{ lineHeight: 1.6 }}>
          And together, we build.
        </p>
      </SlideTopText>
      <div className="w-full relative">
        <Image src="/images/canvas.png" width={2290} height={916} />
        <div className="px-4 md:px-0 w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center md:justify-start items-center md:items-start absolute top-12 md:top-[25%] md:left-[10%]">
          <div className="hidden md:block">
            <p className="font-bold text-white text-xl md:text-3xl lg:text-5xl">
              The future is our
            </p>
            <p className="font-bold text-white text-xl md:text-3xl lg:text-5xl">
              canvas.
            </p>
          </div>
          <div className="md:hidden">
            <p className="font-bold text-white text-xl md:text-3xl lg:text-5xl">
              The future is our canvas.
            </p>
          </div>
          <div className="flex flex-col w-full mt-3 md:mt-6 lg:mt-12 justify-center items-center md:justify-start md:items-start">
            <p className="uppercase text-base md:text-xl lg:text-3xl tracking-wide leading-relaxed text-white opacity-100">
              The endless possibilities of
            </p>
            <p className="uppercase text-base md:text-xl lg:text-3xl tracking-wide leading-relaxed text-white opacity-100">
              metaverse: for brands
            </p>
            <button className="w-1/3 self-center md:self-start border-white border-solid border-2 mt-6 text-white uppercase px-3 py-2 rounded tracking-wide">
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}