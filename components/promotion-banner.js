export default function PromotionBanner() {
  return (
    <div className="flex flex-col w-full tracking-wide mt-5 md:mt-10 lg:mt-[5rem]">
      <div className="flex flex-col-reverse lg:flex-row w-full">
        <div className="w-full lg:w-1/2 flex">
          <img src="/images/promotion-idea.png" className="w-full" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className="w-full lg:w-10/12 py-12 md:py-16 lg:py-16 px-4 md:px-10 lg:px-0">
            <h2 className="tracking-wide text-lg md:text-3xl uppercase text-center lg:text-left">
              Promoting good ideas
            </h2>
            <p className="tracking-wide text-lg md:text-2xl mt-10">
              We promote products, ideas and companies, that inspire and
              prioritize the best interest of the world and the quality of
              peoples lives.
            </p>
            <p className="tracking-wide text-lg md:text-2xl mt-10">
              We are set on delivering you the means to identify, inform, engage
              with and activating your target audience. Our aim is to shorten,
              sharpen and refine the trajectory to your brightest goals.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full bg-gray-200 mt-5 md:mt-10 lg:mt-[5rem]">
        <div className="py-10 md:py-12 lg:py-[3rem] flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            <div className="w-full lg:w-10/12 py-12 md:py-16 lg:py-16 px-4 md:px-10 lg:px-0">
              <h2 className="tracking-wide text-lg md:text-3xl uppercase text-center lg:text-left">
                and accelerating progress
              </h2>
              <p className="tracking-wide text-lg md:text-2xl mt-10">
                Our decisions are based on data and research, leaning on our
                extensive experience, working for companies and organizations
                who have their ambitions set beyond the horizon.
              </p>
              <p className="tracking-wide text-lg md:text-2xl mt-10">
                We connect sharp minds to accelerate extraordinary development.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex">
            <img src="/images/samurai.png" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
