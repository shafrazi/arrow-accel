import SlideTopText from "./slide-top-text";
import Link from "next/link";

export default function MoveForwardBanner() {
  return (
    <div className="w-full flex flex-col text-left">
      <SlideTopText>
        <div className="hidden md:block">
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
        </div>
        <div className="md:hidden">
          <p className="" style={{ lineHeight: 1.6 }}>
            We are creative consultants, committed to{" "}
            <span className="font-bold">accelerating</span> projects and{" "}
            <span className="font-bold">building</span> value for our clients
            and the communities around us.
          </p>
        </div>
      </SlideTopText>

      <div className="w-full relative">
        <video
          loop
          autoPlay
          muted
          className="w-full pointer-events-none object-cover h-screen md:h-[565px] lg:h-[716px]"
        >
          <source src="/videos/move-forward-video.mp4" type="video/mp4" />
        </video>
        <div className="w-full flex justify-center">
          <div className="flex w-full lg:w-10/12 h-full absolute bottom-[0rem]">
            <div
              className="px-10 md:px-0 w-full md:w-8/12 flex flex-col text-white justify-center items-center"
              // style={{
              //   color: "white",
              //   background: "rgba(16, 6, 21, 0.8)",
              // }}
            >
              <div className="w-full px-3 md:px-0 md:w-2/3 flex flex-col">
                <h1 className="font-bold text-4xl md:text-5xl">Moving</h1>
                <h1 className="font-bold text-4xl md:text-5xl">forward.</h1>
                <div className="mt-8 md:mt-4 lg:mt-12 w-full text-[20px] lg:text-xl leading-loose md:leading-loose">
                  <p style={{ lineHeight: 1.6 }}>
                    What strategy should your company adopt to achieve your most
                    daring projects?
                  </p>
                </div>
                <Link href="/contact">
                  <button className="w-2/3 text-[13px] md:text-base md:w-2/3 self-start ml-5 md:ml-0 md:self-start border-white border-solid border-2 mt-12 text-white uppercase px-2 py-1 md:py-2 rounded tracking-wide">
                    Work with us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
