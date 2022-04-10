export default function GetToKnow() {
  return (
    <div className="relative">
      <div className="flex w-full relative justify-center items-center">
        <div className="flex w-full lg:w-11/12">
          <div className="hidden lg:block w-5/12 md:py-[8vw]">
            <h2 className="font-semibold text-lg md:text-2xl lg:text-4xl">
              We're creative
            </h2>
            <h2 className="font-semibold text-lg md:text-2xl lg:text-4xl">
              consultants
            </h2>
          </div>
          <div
            className="w-full lg:w-7/12 flex flex-col justify-center text-base text-left md:text-lg lg:text-xl tracking-wide px-8 py-[6rem] md:px-[5vw] md:py-[8vw]"
            style={{ lineHeight: 1.6 }}
          >
            <h2 className="lg:hidden font-semibold text-xl">We're creative</h2>
            <h2 className="lg:hidden font-semibold text-xl">consultants</h2>
            <p className="mt-6">
              We are lateral thinkers that provide expert advice and bold ideas,
              the people and the tools to create real-life results.
            </p>
            <p className="mt-6">
              Our experience, knowledge and ability to quickly grasp complex
              matter and theory, accelerates creative design and your
              go-to-market trajectory. We work systematically, with deep
              understanding on how projects and ideas are financed, structured
              and redistributed.
            </p>
            <p className="mt-6">
              We work systematically, with deep understanding on how projects
              and ideas are financed, structured and redistributed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
