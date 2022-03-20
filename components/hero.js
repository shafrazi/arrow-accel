export default function Hero() {
  return (
    <div className="w-full flex flex-col">
      {/* <div className="flex w-full justify-center items-center">
        <p className="font-bold text-2xl w-1/3 mb-12 ml-12 mt-24">
          We are creative consultants, committed to accelerating projects and
          building value for our clients and the communities around us.
        </p>
      </div>
      <Image src="/images/hero.png" width="3456" height="1280" /> */}
      <div className="flex w-full mt-[8rem]">
        <div className="w-1/2 px-16 mt-6 font-bold tracking-wide leading-relaxed">
          <p className="text-2xl">We are creative consultants,</p>
          <p className="text-2xl">committed to accelerating projects </p>
          <p className="text-2xl">and building value for our clients and </p>
          <p className="text-2xl">the communities around us.</p>
        </div>
      </div>
      <div
        className="w-full bg-center bg-cover h-[32rem] mt-[12rem]"
        style={{
          backgroundImage: "url(/images/hero.png)",
        }}
      >
        <div className="flex w-full h-full bg-gray-500 bg-opacity-50">
          <div className="mx-20 mt-36">
            <h1 className="text-4xl font-semibold text-white lg:text-5xl font-serif">
              Take the next step.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
