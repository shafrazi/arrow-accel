export default function MissionBanner() {
  return (
    <div className="flex flex-col w-full tracking-wide">
      <div className="w-full flex flex-col bg-black text-white justify-center items-center py-6 md:py-10 lg:py-[8rem]">
        <p className="text-xl md:text-2xl text-center w-full px-16 lg:w-1/3 leading-relaxed">
          We have developed a deep understanding on how to further your
          relevance to the world and how to increase awareness
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/2 px-4 md:px-8 lg:px-[10rem] py-10 md:py-16 lg:py-[10rem]">
          <h2 className="tracking-wide text-lg md:text-3xl uppercase text-center lg:text-left">
            we are on a mission
          </h2>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            Our mission is to create, commercialize, and capture strategic value
            sustainably as we take interest into humanitarian and philanthropic
            ventures to address global issues across five critical concepts
            categorized by:
          </p>
          <p className="tracking-wide text-base md:text-xl mt-10 text-center lg:text-left">
            People | Planet | Prosperity | Peace | Partnership
          </p>
        </div>
        <div className="w-full lg:w-1/2 py-5 lg:py-12 flex justify-center items-center">
          <img src="/images/mission.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}
