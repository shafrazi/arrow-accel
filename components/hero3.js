export default function HeroThree() {
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
          <p className="text-2xl">Our operations are found at the nexus of </p>
          <p className="text-2xl">innovation, art, digital transformation, </p>
          <p className="text-2xl">energy transition, industrial innovation, </p>
          <p className="text-2xl">
            sustainable agriculture and the environment.{" "}
          </p>
        </div>
      </div>
      <div
        className="w-full bg-center bg-cover h-[32rem] mt-12"
        style={{
          backgroundImage: "url(/images/hero3.png)",
        }}
      >
        <div className="flex w-full h-full">
          <div className="mx-20 mt-36">
            <h1 className="text-4xl font-semibold text-white lg:text-5xl font-serif">
              Make lasting impact.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
