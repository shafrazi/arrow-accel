import SlideTopText from "./slide-top-text";
import Image from "next/image";

export default function CanvasBanner() {
  return (
    <div className="w-full flex-flex-col">
      <SlideTopText>
        <div className="hidden md:block">
          <p className="" style={{ lineHeight: 1.6 }}>
            Our agency acts as a system
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            of thinkers that creatively
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            connects the dots and
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            energizes impactful ideas.
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            And together, we build.
          </p>
        </div>
        <div className="md:hidden">
          <p className="" style={{ lineHeight: 1.6 }}>
            Our agency acts as a system of thinkers that creatively connects the
            dots and energizes impactful ideas. And{" "}
            <span className="font-bold">together</span>, we build.
          </p>
        </div>
      </SlideTopText>
      <div className="w-full relative">
        {/* <Image src="/images/canvas.png" layout="fill" objectFit="contain" /> */}
        <img
          src="/images/canvas.png"
          className="w-full h-screen md:h-[565px] lg:h-[716px] object-cover"
        />
        <div className="px-10 md:px-0 w-full md:w-1/2 flex flex-col justify-center md:justify-start md:items-start absolute top-[25%] md:top-[25%] md:left-[10%]">
          <div className="hidden md:block">
            <p className="font-bold text-white text-xl md:text-3xl lg:text-5xl">
              The future is our
            </p>
            <p className="font-bold text-white text-xl md:text-3xl lg:text-5xl">
              canvas.
            </p>
          </div>
          <div className="md:hidden text-4xl lg:text-5xl">
            <p className="font-bold text-white">The</p>
            <p className="font-bold text-white">future</p>
            <p className="font-bold text-white">is our</p>
            <p className="font-bold text-white">canvas.</p>
          </div>
          <div className="flex flex-col w-full mt-3 md:mt-6 lg:mt-12 justify-center md:justify-start md:items-start">
            <p className="uppercase text-[14px] md:text-xl lg:text-3xl tracking-wide leading-relaxed text-white opacity-100">
              The endless possibilities to
            </p>
            <p className="uppercase text-[14px] md:text-xl lg:text-3xl tracking-wide leading-relaxed text-white opacity-100">
              market the metaverse
            </p>
            <button className="w-2/3 text-[13px] md:text-base md:w-2/3 self-start ml-5 md:ml-0 md:self-start border-white border-solid border-2 mt-12 text-white uppercase px-2 py-1 md:py-2 rounded tracking-wide">
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
