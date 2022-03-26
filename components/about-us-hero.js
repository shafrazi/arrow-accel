import Image from "next/image";

export default function AboutUsHero() {
  return (
    <div className="w-full relative">
      <video
        loop
        autoPlay
        muted
        className="w-full pointer-events-none object-cover h-[20rem] md:h-[30rem] lg:h-[40rem]"
      >
        <source src="/videos/about-us-video.mp4" type="video/mp4" />
      </video>
      <div className="flex w-full md:w-1/2 h-[20rem] md:h-[30rem] lg:h-[40rem] bg-red-900 bg-opacity-25 absolute bottom-[0rem] md:left-[5rem]">
        <div className="flex flex-col justify-center items-center mx-5 marker:md:mx-10 lg:mx-20 mt-4 md:mt-18 lg:mt-36 text-center">
          <p
            className="tracking-wide text-lg md:text-xl lg:text-2xl text-center font-semibold text-white mb-2 md:mb-5 lg:mb-10"
            style={{ fontFamily: "OpenSauceOne", fontWeight: "normal" }}
          >
            We are consultants for brands, entertainment professionals,
            start-ups and artists, ready to create, develop or reinvigorate your
            business.
          </p>
          <img src="/images/logo-icon-white.png" className="w-1/3" />
        </div>
      </div>
    </div>
  );
}
