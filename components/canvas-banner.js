import SlideTopText from "./slide-top-text";

export default function CanvasBanner() {
  return (
    <div className="w-full flex-flex-col">
      <SlideTopText>
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
      </SlideTopText>
      <div className="w-full relative">
        {/* <Image src="/images/canvas.png" width={2290} height={916} /> */}
        <img
          src="/images/canvas.png"
          className="w-full h-[42vh] md:h-[565px] lg:h-[716px]"
        />
        <div className="px-10 md:px-0 w-3/4 md:w-1/2 flex flex-col justify-center md:justify-start items-center md:items-start absolute top-12 md:top-[25%] md:left-[10%]">
          <div className="hidden md:block">
            <p className="font-bold text-white text-xl md:text-3xl lg:text-5xl">
              The future is our
            </p>
            <p className="font-bold text-white text-xl md:text-3xl lg:text-5xl">
              canvas.
            </p>
          </div>
          <div className="md:hidden">
            <p className="font-bold text-white text-xl lg:text-5xl">
              The future is our canvas.
            </p>
          </div>
          <div className="flex flex-col w-full mt-3 md:mt-6 lg:mt-12 justify-center items-start md:justify-start md:items-start">
            <p className="uppercase text-[10px] md:text-xl lg:text-3xl tracking-wide leading-relaxed text-white opacity-100">
              The endless possibilities of
            </p>
            <p className="uppercase text-[10px] md:text-xl lg:text-3xl tracking-wide leading-relaxed text-white opacity-100">
              metaverse: for brands
            </p>
            <button className="w-2/3 text-[9px] md:text-base md:w-2/3 self-end md:self-start border-white border-solid border-2 mt-8 text-white uppercase px-2 py-1 md:py-2 rounded tracking-wide">
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
