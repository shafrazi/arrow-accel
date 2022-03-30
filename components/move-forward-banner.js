import SlideTopText from "./slide-top-text";

export default function MoveForwardBanner() {
  return (
    <div className="w-full flex flex-col">
      <SlideTopText>
        <div className="flex w-full">
          <div
            className="w-full md:w-3/4 lg:w-2/3 px-5 md:pl-[3rem] lg:pl-[5rem] mt-6 tracking-wider md:leading-loose text-2xl"
            style={{
              fontFamily: "OpenSauceOne",
              fontWeight: "normal",
              lineHeight: 1.6,
            }}
          >
            <p className="">We are creative consultants,</p>
            <p className="">
              committed to{" "}
              <span style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}>
                accelerating
              </span>{" "}
              projects{" "}
            </p>
            <p className="">
              and{" "}
              <span style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}>
                building
              </span>{" "}
              value for our clients and{" "}
            </p>
            <p className="">the communities around us.</p>
          </div>
        </div>
      </SlideTopText>

      <div className="w-full mt-10 md:mt-[5rem] relative">
        <video
          loop
          autoPlay
          muted
          className="w-full pointer-events-none object-cover h-[300px] md:h-[565px]"
        >
          <source src="/videos/move-forward-video.mp4" type="video/mp4" />
        </video>
        <div className="w-full flex justify-center">
          <div className="flex w-full lg:w-10/12 h-full  absolute bottom-[0rem]">
            <div
              className="w-full md:w-7/12 flex flex-col justify-center items-center text-4xl"
              style={{
                color: "white",
                background: "rgba(16, 6, 21, 0.8)",
              }}
            >
              <div className="w-2/3 flex flex-col">
                <h1 className="font-bold text-4xl">Moving forward.</h1>
                <div className="mt-2 md:mt-4 lg:mt-12 w-full text-base leading-normal md:leading-loose">
                  <p>Which opportunities are within</p>
                  <p>reach and which are on the</p>
                  <p>horizon? What strategy should </p>
                  <p>your company adopt to achieve</p>
                  <p>your most daring projects?</p>
                </div>
                <button className="w-full text-base md:w-2/3 self-center md:self-end border-white border-solid border-2 mt-8 text-white uppercase px-2 py-2 rounded tracking-wide">
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
