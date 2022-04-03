import SlideTopText from "./slide-top-text";

export default function MoveForwardBanner() {
  return (
    <div className="w-full flex flex-col">
      <SlideTopText>
        <p className="" style={{ lineHeight: 1.6 }}>
          We are creative consultants,
        </p>
        <p className="" style={{ lineHeight: 1.6 }}>
          committed to{" "}
          <span style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}>
            accelerating
          </span>{" "}
          projects{" "}
        </p>
        <p className="" style={{ lineHeight: 1.6 }}>
          and{" "}
          <span style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}>
            building
          </span>{" "}
          value for our clients and{" "}
        </p>
        <p className="" style={{ lineHeight: 1.6 }}>
          the communities around us.
        </p>
      </SlideTopText>

      <div className="w-full relative">
        <video
          loop
          autoPlay
          muted
          className="w-full pointer-events-none object-cover h-[42vh] md:h-[565px] lg:h-[716px]"
        >
          <source src="/videos/move-forward-video.mp4" type="video/mp4" />
        </video>
        <div className="w-full flex justify-center">
          <div className="flex w-full lg:w-10/12 h-full absolute bottom-[0rem]">
            <div
              className="w-7/12 flex flex-col justify-center items-center"
              style={{
                color: "white",
                background: "rgba(16, 6, 21, 0.8)",
              }}
            >
              <div className="w-full px-4 md:px-0 md:w-2/3 flex flex-col">
                <h1 className="font-bold text-xl md:text-4xl">
                  Moving forward.
                </h1>
                <div className="mt-2 md:mt-4 lg:mt-12 w-full text-xs lg:text-xl leading-normal md:leading-loose">
                  <p>Which opportunities are within</p>
                  <p>reach and which are on the</p>
                  <p>horizon? What strategy should </p>
                  <p>your company adopt to achieve</p>
                  <p>your most daring projects?</p>
                </div>
                <button className="w-2/3 text-sm md:text-base md:w-2/3 self-end md:self-start border-white border-solid border-2 mt-8 text-white uppercase px-2 py-1 md:py-2 rounded tracking-wide">
                  Talk to us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
