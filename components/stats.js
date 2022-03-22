export default function Stats() {
  return (
    <div
      className="w-full bg-center bg-cover h-[22rem] mt-12"
      style={{
        backgroundImage: "url(/images/about-us-hero.png)",
      }}
    >
      <div
        className="flex w-full h-full bg-black justify-center items-center"
        style={{ opacity: 0.86 }}
      >
        <div className="flex justify-center items-center w-full">
          <div
            className="w-1/4 flex flex-col justify-center items-center text-white"
            style={{ fontFamily: "OpenSauceOne" }}
          >
            <p
              className="text-6xl"
              style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
            >
              35
            </p>
            <p className="text-xl">clients served</p>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center text-white">
            <p
              className="text-6xl"
              style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
            >
              67m
            </p>
            <p className="text-xl">people reached</p>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center text-white">
            <p
              className="text-6xl"
              style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
            >
              100+
            </p>
            <p className="text-xl">projects and events</p>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center text-white">
            <p
              className="text-6xl"
              style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
            >
              35
            </p>
            <p className="text-xl">campaigns delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
