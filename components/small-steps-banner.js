export default function SmallSteps() {
  return (
    <div className="flex w-full relative justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center px-[5vw] py-[7vw] bg-black text-white">
        <div className="w-full flex lg:w-10/12 py-6 md:py-10 lg:py-16 px-4 md:px-10 lg:px-0">
          <div className="w-1/3 flex flex-col justify-center items-center px-5">
            <div className="flex flex-col justify-center self-end">
              <p className="text-xl md:text-3xl lg:text-6xl font-bold">Small</p>
              <p className="text-xl md:text-3xl lg:text-6xl font-bold">
                steps.
              </p>
            </div>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center animate__animated animate__rotateIn">
            <img src="/images/logo-icon-white.png" className="w-5/12" />
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center px-5">
            <div className="flex flex-col justify-center self-start">
              <p className="text-xl md:text-3xl lg:text-6xl font-bold">Giant</p>
              <p className="text-xl md:text-3xl lg:text-6xl font-bold">
                leaps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
