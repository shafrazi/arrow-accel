export default function FoundationBanner() {
  return (
    <div className="flex flex-col w-full tracking-wide my-4 md:mt-10 lg:mt-16">
      <div className="w-full flex flex-col-reverse  lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className="w-full lg:w-10/12 py-12 md:py-16 lg:py-16 px-4 md:px-10 lg:px-0">
            <p className="tracking-wide text-lg md:text-2xl">
              ARROW ACCEL is built on our core principle of placing our
              clients'​ interests first. Our intrinsic values represent
              integrity, prudency, tenacity, quality and veracity.
            </p>
            <p className="tracking-wide text-lg md:text-2xl mt-10">
              This decade is a ‘decade-of-change’ where we decide the trajectory
              and velocity of the fate of life on our planet.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-4 py-4 bg-black text-white">
          <div className="w-full flex lg:w-10/12 py-6 md:py-10 lg:py-16 px-4 md:px-10 lg:px-0">
            <div className="w-1/3 flex flex-col justify-center px-5 items-center">
              <p className="text-xl md:text-3xl lg:text-5xl font-bold">Small</p>
              <p className="text-xl md:text-3xl lg:text-5xl font-bold">
                steps.
              </p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <img src="/images/logo-icon-white.png" className="w-3/4" />
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center px-5">
              <p className="text-xl md:text-3xl lg:text-5xl font-bold">Giant</p>
              <p className="text-xl md:text-3xl lg:text-5xl font-bold">
                leaps.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:py-[5rem]">
        <div className="w-full lg:w-1/2 flex">
          <img src="/images/foundation.png" className="w-full" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className="w-full lg:w-10/12 py-12 md:py-16 px-4 md:px-10 lg:px-0">
            <h2 className="tracking-wide text-lg md:text-3xl uppercase text-center lg:text-left">
              foundation
            </h2>
            <p className="tracking-wide text-lg md:text-2xl mt-4 md:mt-10">
              A strong, visionary strategy and creative team, directing projects
              together with specialized execution partners, each operating at
              the top of their respective fields of expertise.
            </p>
            <p className="tracking-wide text-lg md:text-2xl mt-4 md:mt-10">
              Together we help raise visibility, break into the marketplace and
              help secure funds for ground-breaking projects, disruptive ideas
              and companies in the Netherlands and around the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
