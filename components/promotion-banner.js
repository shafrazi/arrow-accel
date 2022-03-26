export default function PromotionBanner() {
  return (
    <div className="flex flex-col w-full tracking-wide">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 py-12 flex justify-center items-center">
          <img src="/images/promotion-idea.png" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-[10rem] py-4 md:py-[10rem]">
          <h2 className="tracking-wide text-lg md:text-3xl uppercase">
            Promoting good ideas
          </h2>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            We promote products, ideas and companies, that inspire and
            prioritize the best interest of the world and the quality of peoples
            lives.
          </p>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            We are set on delivering you the means to identify, inform, engage
            with and activating your target audience. Our aim is to shorten,
            sharpen and refine the trajectory to your brightest goals.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full bg-gray-200">
        <div className="w-full md:w-1/2 px-4 md:px-[10rem] py-4 md:py-[10rem]">
          <h2 className="tracking-wide text-lg md:text-3xl uppercase">
            and accelerating progress
          </h2>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            Our decisions are based on data and research, leaning on our
            extensive experience, working for companies and organizations who
            have their ambitions set beyond the horizon.
          </p>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            We connect sharp minds to accelerate extraordinary development.
          </p>
        </div>
        <div className="w-full md:w-1/2 py-12 flex justify-center items-center">
          <img src="/images/promotion-idea.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}
