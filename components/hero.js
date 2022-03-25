import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex flex-col mt-4 md:mt-16 lg:mt-[8rem]">
      <div className="flex w-full">
        <div
          className="w-full md:w-3/4 lg:w-2/3 px-5 md:pl-[3rem] lg:pl-[5rem] mt-6 tracking-wider md:leading-loose text-lg md:text-xl lg:text-2xl"
          style={{
            fontFamily: "OpenSauceOne",
            fontWeight: "normal",
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
      <div className="w-full mt-16 md:mt-[8rem] relative">
        <video
          loop
          autoPlay
          muted
          className="w-full pointer-events-none object-cover h-[20rem] md:h-[30rem] lg:h-[40rem]"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="flex w-1/3 h-[20rem] md:h-[30rem] lg:h-[40rem] bg-red-900 bg-opacity-25 absolute bottom-[0rem] left-[5rem]">
          <div className="mx-6 mt-12 md:mx-18 lg:mx-20 md:mt-28 lg:mt-36 w-full">
            <h1
              className="text-2xl md:text-3xl font-semibold text-white lg:text-5xl mb-6 lg:mb-16"
              style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
            >
              Take aim.
            </h1>
            <img src="/images/logo-icon-white.png" className="w-1/3 lg:w-80" />
          </div>
        </div>
      </div>
    </div>
  );
}
