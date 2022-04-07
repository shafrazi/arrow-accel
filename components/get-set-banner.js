import SlideTopText from "./slide-top-text";

export default function GetSetBanner() {
  return (
    <div className="w-full flex flex-col">
      <SlideTopText>
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
      </SlideTopText>

      <div className="w-full relative">
        <img
          src="/images/hero3.png"
          className="w-full h-[42vh] md:h-[565px] lg:h-[716px]"
        />
        <div className="w-full flex justify-center">
          <div className="flex w-full lg:w-10/12 h-full absolute bottom-[0rem]">
            <div
              className="w-8/12 flex flex-col justify-center items-center"
              style={{
                color: "white",
                background: "rgba(16, 6, 21, 0.8)",
              }}
            >
              <div className="w-full px-3 md:px-0 md:w-2/3 flex flex-col">
                <h1 className="font-bold text-lg md:text-4xl">Get set.</h1>
                <div className="mt-2 md:mt-4 lg:mt-12 w-full text-[10px] lg:text-xl leading-normal md:leading-loose">
                  <p>Technological advance,</p>
                  <p>demographic and environmental</p>
                  <p>changes are rapidly reshaping the</p>
                  <p>world. Are you ready to move with the tide?</p>
                </div>
                <button className="w-2/3 text-[9px] md:text-base md:w-2/3 self-end md:self-start border-white border-solid border-2 mt-8 text-white uppercase px-2 py-1 md:py-2 rounded tracking-wide">
                  Go!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
