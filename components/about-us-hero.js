import Image from "next/image";

export default function AboutUsHero() {
  return (
    <div className="w-full relative h-[90vh] md:h-full bg-black">
      <video
        loop
        autoPlay
        muted
        playsInline
        className="w-full pointer-events-none object-cover h-screen md:h-[30rem] lg:h-[40rem]"
      >
        <source src="/videos/about-us-video.mp4" type="video/mp4" />
      </video>
      <div className="flex w-full md:w-1/2 h-full md:h-[30rem] lg:h-[40rem] md:bg-red-900 md:bg-opacity-25 absolute top-[0rem] md:bottom-[0rem] md:left-[5rem]">
        <div className="flex flex-col md:justify-center items-center mx-5 marker:md:mx-10 lg:mx-20 mt-4 md:mt-18 lg:mt-36 text-center">
          <p
            className="py-[6rem] md:py-0 tracking-wide text-base md:text-xl lg:text-2xl text-left md:text-center font-semibold text-white mb-2 md:mb-5 lg:mb-10"
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
