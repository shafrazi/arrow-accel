export default function Clients() {
  return (
    <div className="flex flex-col w-full">
      <div
        className="w-full bg-cover object-cover h-80 lg:h-[35rem]"
        style={{
          backgroundImage: "url(/images/client-banner.png)",
        }}
      >
        <div
          className="flex w-full h-full justify-center items-center"
          style={{ opacity: 0.86 }}
        >
          <div className="w-full flex flex-col justify-center items-center  tracking-wide">
            <div className="w-full px-4 md:px-0 md:w-2/3 lg:w-5/12">
              <p className="text-white text-center text-lg md:text-2xl lg:text-4xl font-bold">
                Our clients
              </p>
              <p className="text-white text-base md:text-xl lg:text-2xl mt-2 md:mt-8 lg:mt-12 text-center">
                We have serviced brands, organizations, start-ups and artists,
                using insight and creativity to launch ideas across the globe.
              </p>
              <p className="text-white text-base md:text-xl lg:text-2xl mt-2 md:mt-8 lg:mt-12 text-center">
                Our clients confide in us to translate their vision into action.
                ARROW ACCEL helps pave the road from concept to creation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-x-5 md:gap-x-10 gap-y-2 justify-items-center w-full px-4 md:px-10 lg:px-[15rem] py-10 md:py-16 lg:py-[10rem]">
        <img src="/images/logos/affirm.png" className="w-[12rem]" />
        <img src="/images/logos/neely-air.png" className="w-[12rem]" />
        <img src="/images/logos/safeway.png" className="w-[12rem]" />
        <img src="/images/logos/nortek.png" className="w-[12rem]" />
        <img src="/images/logos/gov-neth.png" className="w-[12rem]" />
        <img src="/images/logos/woodstock.png" className="w-[12rem]" />
        <img src="/images/logos/lazein.png" className="w-[12rem]" />
        <img src="/images/logos/mulder.png" className="w-[12rem]" />
        <img src="/images/logos/founder.png" className="w-[12rem]" />
        <img src="/images/logos/sustainable.png" className="w-[12rem]" />
        <img src="/images/logos/ars.png" className="w-[12rem]" />
        <img src="/images/logos/antler.png" className="w-[12rem]" />
      </div>
    </div>
  );
}
