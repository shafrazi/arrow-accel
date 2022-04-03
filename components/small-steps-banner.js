import { InView } from "react-intersection-observer";

export default function SmallSteps() {
  return (
    <div className="flex w-full relative justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center px-[5vw] py-[7vw] bg-black text-white">
        <div className="w-full flex flex-col md:flex-row lg:w-10/12 py-6 md:py-10 lg:py-16 px-4 md:px-10 lg:px-0">
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center px-5">
            <div className="flex flex-col justify-center md:self-end py-10 md:py-0">
              <p className="text-3xl lg:text-6xl font-bold">Small</p>
              <p className="text-3xl lg:text-6xl font-bold">steps.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center py-10 md:py-0">
            <InView>
              {({ inView, ref, entry }) => (
                <img
                  ref={ref}
                  src="/images/logo-icon-white.png"
                  className={`w-3/12 md:w-5/12 ${
                    inView && "animate__animated animate__flip"
                  }`}
                />
              )}
            </InView>
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center px-5">
            <div className="flex flex-col justify-center md:self-start py-10 md:py-0">
              <p className="text-3xl lg:text-6xl font-bold">Giant</p>
              <p className="text-3xl lg:text-6xl font-bold">leaps.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
