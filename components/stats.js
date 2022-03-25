export default function Stats() {
  return (
    <div
      className="w-full bg-center bg-cover h-40 md:h-[22rem] mt-12"
      style={{
        backgroundImage: "url(/images/about-us-hero.png)",
      }}
    >
      <div
        className="flex w-full h-full bg-black justify-center items-center"
        style={{ opacity: 0.86 }}
      >
        <div className="flex flex-wrap justify-center items-center w-full">
          <div
            className="w-1/2 md:w-1/4 flex flex-col justify-center items-center text-white py-4"
            style={{ fontFamily: "OpenSauceOne" }}
          >
            <p
              className="text-xl md:text-4xl lg:text-6xl"
              style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
            >
              35
            </p>
            <p className="text-sm md:text-lg lg:text-xl">clients served</p>
          </div>
          <div className="w-1/2 md:w-1/4 flex flex-col justify-center items-center text-white py-4">
            <p
              className="text-xl md:text-4xl lg:text-6xl"
              style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
            >
              67m
            </p>
            <p className="text-sm md:text-lg lg:text-xl">people reached</p>
          </div>
          <div className="w-1/2 md:w-1/4 flex flex-col justify-center items-center text-white py-4">
            <p
              className="text-xl md:text-4xl lg:text-6xl"
              style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
            >
              100+
            </p>
            <p className="text-sm md:text-lg lg:text-xl">projects and events</p>
          </div>
          <div className="w-1/2 md:w-1/4 flex flex-col justify-center items-center text-white py-4">
            <p
              className="text-xl md:text-4xl lg:text-6xl"
              style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
            >
              35
            </p>
            <p className="text-sm md:text-lg lg:text-xl">campaigns delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
