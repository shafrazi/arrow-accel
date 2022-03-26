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
            <div className="w-full flex mt-4 lg:mt-10 text-base md:text-xl">
              <div className="w-1/4">
                <p>HQ</p>
              </div>
              <div className="w-2/3">
                <p>Keizersgracht 391-A</p>
                <p>1016 EJ Amsterdam</p>
                <p>the Netherlands</p>
              </div>
            </div>
            <div className="w-full flex mt-2 lg:mt-5 text-base md:text-xl">
              <div className="w-1/4 flex>">
                <p>Email</p>
              </div>
              <div className="w-2/3 text-left">
                <p>contactus@arrowaccel.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-amber-50 w-full flex flex-col py-5 md:py-8 lg:py-12 mt-12 lg:mt-[5rem]">
        <div className="w-full">
          <div className="w-full flex md:w-1/2 justify-center items-center">
            <div className="w-full px-5 md:px-5 md:w-10/12 flex flex-col">
              <h1 className="font-bold text-base md:text-2xl lg:text-3xl">
                Our team
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex-col lg:flex-row mt-4">
          <div className="w-full flex md:w-1/2 justify-center items-center">
            <div className="w-full px-5 md:px-5 md:w-10/12 flex flex-col">
              <div className="w-full flex space-x-5">
                <div className="flex items-center w-3/12 md:w-4/12 lg:w-3/12">
                  <img
                    src="/images/robert.png"
                    className="w-20 h-20 lg:w-full lg:h-full rounded-full bg-gray-800"
                  />
                </div>
                <div className="w-8/12 flex flex-col">
                  <p className="text-base md:text-xl lg:text-2xl">
                    Robert Schaeffer,
                  </p>
                  <p className="text-base md:text-xl lg:text-2xl">
                    Creative Director
                  </p>
                  <div className="flex flex-col h-full py-5 w-full justify-end">
                    <p className="font-bold uppercase">
                      AMSTERDAM, THE NETHERLANDS
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
