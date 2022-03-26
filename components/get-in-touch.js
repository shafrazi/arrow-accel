export default function GetInTouch() {
  return (
    <div className="flex flex-col w-full h-screen tracking-wide relative">
      <img
        src="/images/logo-icon-black-large-crop.png"
        className=""
        style={{
          opacity: 0.1,
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "auto",
        }}
      />
      <div className="relative w-full flex flex-col md:flex-row mt-4 md:mt-6 lg:mt-10">
        <div className="w-full flex md:w-1/2 justify-center items-center">
          <div className="w-full px-5 md:px-5 md:w-10/12 flex flex-col">
            <h1 className="font-bold text-base md:text-2xl lg:text-3xl">
              Get in Touch
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
