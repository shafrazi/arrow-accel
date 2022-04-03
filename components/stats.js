import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

export default function Stats() {
  return (
    <div className="w-full bg-center bg-cover mt-[6rem]">
      <div className="flex w-full h-full bg-black justify-center items-center py-10 md:py-16 lg:py-[6rem]">
        <InView>
          {({ inView, ref, entry }) => {
            return (
              <div
                ref={ref}
                className="flex flex-wrap justify-center items-center w-full"
              >
                <div
                  className="w-full md:w-1/4 flex flex-col justify-center items-center text-white py-4"
                  style={{ fontFamily: "OpenSauceOne" }}
                >
                  <p
                    className="text-4xl md:text-4xl lg:text-6xl"
                    style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
                  >
                    <CountUp end={inView && 35} />
                  </p>
                  <p className="text-sm md:text-lg lg:text-xl">
                    clients served
                  </p>
                </div>
                <div className="w-full md:w-1/4 flex flex-col justify-center items-center text-white py-4">
                  <p
                    className="text-4xl md:text-4xl lg:text-6xl"
                    style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
                  >
                    <CountUp end={inView && 67} />m
                  </p>
                  <p className="text-sm md:text-lg lg:text-xl">
                    people reached
                  </p>
                </div>
                <div className="w-full md:w-1/4 flex flex-col justify-center items-center text-white py-4">
                  <p
                    className="text-4xl md:text-4xl lg:text-6xl"
                    style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
                  >
                    <CountUp end={inView && 100} /> +
                  </p>
                  <p className="text-sm md:text-lg lg:text-xl">
                    projects and events
                  </p>
                </div>
                <div className="w-full md:w-1/4 flex flex-col justify-center items-center text-white py-4">
                  <p
                    className="text-4xl md:text-4xl lg:text-6xl"
                    style={{ fontFamily: "OpenSauceOne", fontWeight: "bold" }}
                  >
                    <CountUp end={inView && 35} />
                  </p>
                  <p className="text-sm md:text-lg lg:text-xl">
                    campaigns delivered
                  </p>
                </div>
              </div>
            );
          }}
        </InView>
      </div>
    </div>
  );
}
