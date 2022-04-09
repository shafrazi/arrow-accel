import SlideTopText from "./slide-top-text";

export default function GetSetBanner() {
  return (
    <div className="w-full flex flex-col">
      <SlideTopText>
        <div className="hidden md:block">
          <p className="" style={{ lineHeight: 1.6 }}>
            Our operations are found at the nexus of
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            innovation, art, digital transformation,
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            energy transition, industrial innovation,
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            sustainable agriculture and the environment.
          </p>
        </div>
        <div className="md:hidden">
          <p className="" style={{ lineHeight: 1.6 }}>
            Our operations are found at the nexus of innovation, art, digital
            transformation, energy transition, industrial innovation,
            sustainable agriculture and the environment.
          </p>
        </div>
      </SlideTopText>

      <div className="w-full relative">
        <img
          src="/images/hero3.png"
          className="w-full h-screen md:h-[565px] lg:h-[716px] object-cover"
        />
        <div className="w-full flex justify-center">
          <div className="flex w-full lg:w-10/12 h-full absolute bottom-[0rem]">
            <div
              className="w-full md:w-8/12 px-10 md:px-0 flex flex-col justify-center items-center text-white banner-overlay"
              style={{
                color: "white",
                background: "rgba(16, 6, 21, 0.5)",
              }}
            >
              <div className="w-full px-3 md:px-0 md:w-2/3 flex flex-col">
                <h1 className="font-bold text-4xl md:text-4xl">Get set.</h1>
                <div className="mt-8 md:mt-4 lg:mt-12 w-full text-[20px] lg:text-xl md:leading-loose loose-text">
                  <p style={{ lineHeight: 1.6 }}>Technological advance,</p>
                  <p style={{ lineHeight: 1.6 }}>
                    demographic and environmental
                  </p>
                  <p style={{ lineHeight: 1.6 }}>
                    changes are rapidly reshaping the
                  </p>
                  <p style={{ lineHeight: 1.6 }}>
                    world. Are you ready to move with the tide?
                  </p>
                </div>
                <button className="w-2/3 text-[13px] md:text-base md:w-2/3 self-start ml-5 md:ml-0 md:self-start border-white border-solid border-2 mt-12 text-white uppercase px-2 py-1 md:py-2 rounded tracking-wide">
                  talk to us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
