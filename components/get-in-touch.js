import TeamCard from "./team-card";

export default function GetInTouch() {
  return (
    <div className="flex flex-col w-full py-16 tracking-wide relative bg-white" >
      <div className="relative w-full flex flex-col md:flex-row mt-4 md:mt-6 lg:mt-10 ">
        <div className="w-full flex md:w-1/2 justify-center items-center">
          <div className="w-full px-5 md:px-5 md:w-10/12 flex flex-col">
            <h1 className="text-gray-800  px-10  text-base md:text-2xl lg:text-3xl">
              Get in Touch
            </h1>
            <div className="w-full flex mt-4 lg:mt-10 text-base md:text-xl">
              <div className="w-1/4">
                <p class="px-10 text-gray-800" style={{
            fontFamily: "OpenSauceOne",
            fontWeight: "normal",
            lineHeight: 1.6,
          }}>HQ</p>
              </div>
              <div className="px-16 text-gray-800" style={{
            fontFamily: "OpenSauceOne",
            fontWeight: "normal",
            lineHeight: 1.6,
          }}>
                <p>Keizersgracht 391-A</p>
                <p>1016 EJ Amsterdam</p>
                <p>the Netherlands</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-end pl-24 ml-10 ">
          {" "}
          <button class=" uppercase border border-double-2 text-gray-600 border-gray-800 px-8 p-2">
            Schedule a call
          </button>
          <button class="uppercase border mt-4 text-gray-600 border-gray-800 px-8 p-2">
            Send us an email
          </button>
        </div>
      </div>
    </div>
  );
}
