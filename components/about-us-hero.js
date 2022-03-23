import Image from "next/image";

export default function AboutUsHero() {
  return (
    <div className="w-full relative">
      <video
        loop
        autoPlay
        muted
        className="w-full pointer-events-none object-cover h-[40rem]"
      >
        <source src="/videos/about-us-video.mp4" type="video/mp4" />
      </video>
      <div className="flex w-1/3 h-[40rem] bg-red-900 bg-opacity-25 absolute bottom-[0rem] left-[5rem]">
        <div className="mx-20 mt-36 text-center">
          <p
            className="tracking-wide text-2xl text-center font-semibold text-white mb-10"
            style={{ fontFamily: "OpenSauceOne", fontWeight: "normal" }}
          >
            We are consultants for brands, entertainment professionals,
            start-ups and artists, ready to create, develop or reinvigorate your
            business.
          </p>
          <Image src="/images/logo-icon-white.png" width={250} height={200} />
        </div>
      </div>
    </div>
  );
}
