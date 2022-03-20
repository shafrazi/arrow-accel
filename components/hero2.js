export default function HeroTwo() {
  return (
    <div className="w-full flex flex-col">
      {/* <div className="flex w-full justify-center items-center">
        <p className="font-bold text-2xl w-1/3 mb-12 ml-12 mt-24">
          We are creative consultants, committed to accelerating projects and
          building value for our clients and the communities around us.
        </p>
      </div>
      <Image src="/images/hero.png" width="3456" height="1280" /> */}
      <div className="flex w-full mt-12">
        <div className="w-1/2 px-16 mt-6 font-bold">
          <p className="text-2xl">Our agency acts as a system of thinkers </p>
          <p className="text-2xl">that creatively connects the dots and </p>
          <p className="text-2xl">energizes impactful ideas. </p>
        </div>
      </div>
      <div
        className="w-full bg-center bg-cover h-[32rem] mt-12"
        style={{
          backgroundImage: "url(/images/hero2.png)",
        }}
      >
        <div className="flex w-full h-full">
          <div className="mx-20 mt-36">
            <h1 className="text-4xl font-semibold text-white lg:text-5xl font-serif">
              The future is your canvas.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
