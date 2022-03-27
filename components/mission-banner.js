export default function MissionBanner() {
  return (
    <div className="flex flex-col w-full tracking-wide">
      <div className="w-full flex flex-col bg-black text-white justify-center items-center py-8 md:py-10 lg:py-[6rem]">
        <p className="text-xl md:text-2xl text-center w-full px-16 lg:w-2/3 leading-relaxed">
          We have developed a deep understanding
        </p>
        <p className="text-xl md:text-2xl text-center w-full px-16 lg:w-2/3 leading-relaxed">
          on how to further your relevance to the
        </p>
        <p className="text-xl md:text-2xl text-center w-full px-16 lg:w-2/3 leading-relaxed">
          world and how to increase awareness
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-full mt-5 md:mt-10 lg:mt-[5rem]">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className="w-full lg:w-10/12 py-6 md:py-10 lg:py-16 px-4 md:px-10 lg:px-0">
            <h2 className="tracking-wide text-lg md:text-3xl uppercase text-center lg:text-left">
              we are on a mission
            </h2>
            <p className="tracking-wide text-lg md:text-2xl mt-10">
              Our mission is to create, commercialize, and capture strategic
              value sustainably as we take interest into humanitarian and
              philanthropic ventures to address global issues across five
              critical concepts categorized by:
            </p>
            <p className="tracking-wide text-base md:text-xl mt-10 text-center lg:text-left">
              People | Planet | Prosperity | Peace | Partnership
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex">
          <img src="/images/mission.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}
