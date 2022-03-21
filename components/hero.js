import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full mt-[8rem]">
        <div
          className="w-1/2 px-[10rem] mt-6 tracking-wider leading-relaxed"
          style={{ fontFamily: "OpenSauceOne", fontWeight: "normal" }}
        >
          <p className="text-2xl">We are creative consultants,</p>
          <p className="text-2xl">
            committed to{" "}
            <span
              // className="font-bold"
              style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
            >
              accelerating
            </span>{" "}
            projects{" "}
          </p>
          <p className="text-2xl">
            and{" "}
            <span style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}>
              building
            </span>{" "}
            value for our clients and{" "}
          </p>
          <p className="text-2xl">the communities around us.</p>
        </div>
      </div>
      <div className="w-full mt-[12rem] relative">
        <video
          loop
          autoPlay
          muted
          className="w-full pointer-events-none object-cover h-[40rem]"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="flex w-1/3 h-[40rem] bg-red-900 bg-opacity-25 absolute bottom-[0rem] left-[5rem]">
          <div className="mx-20 mt-36">
            <h1
              className="text-4xl font-semibold text-white lg:text-5xl mb-16"
              style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
            >
              Take aim.
            </h1>
            <Image src="/images/logo-icon-white.png" width={250} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
