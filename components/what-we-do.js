export default function WhatWeDo() {
  return (
    <div className="flex flex-col w-full tracking-wide">
      <div className="w-full">
        <img src="/images/build-it.png" className="w-full" />
      </div>
      <div className="flex flex-col md:flex-row w-full mt-16">
        <div className="w-full md:w-1/2 px-4 md:px-[10rem] py-4 md:py-[5rem]">
          <h2 className="tracking-wide text-lg md:text-3xl font-bold">
            Energy transition
          </h2>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            We are commited to drive the energy transition past Net Zero targets
            to meet 1.5 ºC sustainability goals of the Paris Agreement. The
            transition needs to be accelerated as we are running our of time.
          </p>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            At ARROW ACCEL, we create compelling content for companies and
            foundations that actively address contemporary challenges with
            breakthrough solutions that contribute to protecting nature and life
            on Earth.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-[10rem] py-4 md:py-[5rem] bg-black text-white">
          <h2 className="tracking-wide text-lg md:text-3xl font-bold">
            Art & entertainment
          </h2>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            As a brand, collective or independent artist, in order to succeed
            you must master both the creative and the strategic side of your
            business.
          </p>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            We work for and with artists, and creative entrepreneurs to create
            and promote commercially viable new business, products and projects,
            using keen strategic and marketing insight and powerful design.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full mt-16">
        <div className="w-full md:w-1/2 px-4 md:px-[10rem] py-4 md:py-[5rem] bg-black text-white">
          <h2 className="tracking-wide text-lg md:text-3xl font-bold">
            Industrial innovation
          </h2>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            We accelerate industrial innovation by bringing solutions to markets
            that solve transitional challenges in the energy market,
            transportation space and food sectors.
          </p>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            We support inspiring moonshot projects and entrepreneurs and
            foundations that dare to think differently.
          </p>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            Independent thinkers change the world we live in, with disruptive
            industrial innovations.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-[10rem] py-4 md:py-[5rem]">
          <h2 className="tracking-wide text-lg md:text-3xl font-bold">
            Future technologies
          </h2>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            The world around us is rapidly changing and a clear view of what the
            future holds, is diluted by every deeper avenue that technological
            advance takes us into. It can be hard to keep up, let alone to stay
            ahead. We are ahead of the tech curve.
          </p>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            Our background in innovative media and fintech spans two decades.
            Our knowledge pool covers banks, consultants, insurers,
            cybersecurity, digital asset trading, biomimetic development and
            fintech companies.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full mt-16">
        <div className="w-full md:w-1/2 px-4 md:px-[10rem] py-4 md:py-[5rem]">
          <h2 className="tracking-wide text-lg md:text-3xl font-bold">
            Investment readiness
          </h2>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            Through our global network we are able to make introductions to
            capital sources for project of any size and strategy, growth equity,
            funds and philantropy for sustainable investment solutions.
          </p>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            With the right marketing & sales collateral we work on sharpening
            your aim to shoot for the moon.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-[10rem] py-4 md:py-[5rem] bg-black text-white">
          <h2 className="tracking-wide text-lg md:text-3xl font-bold">
            Transformational technology
          </h2>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            Digital transformation is a key word in marketing toolbox nowadays.
            To us, it's more than just a phrase.
          </p>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            We are digital transformation leaders, able to tokenize real-world
            and digital assets. Our AR/VR/Metaverse and blended experiences make
            your projects come to life.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row bg-black text-white px-[10rem] py-[8rem] text-2xl leading-relaxed mt-16">
        <div className="w-1/2 pr-16">
          <p className="">
            Work with us to identify your goals, to clarify the challenges ahead
            and to strategize on solutions. Free yourself and find your flow to
            move forward frictionless with first steps and renewed energy.
          </p>
        </div>
        <div className="w-1/2 pl-16 flex">
          <div className="w-100 h-100 rounded-full bg-sky-200 flex justify-center items-center">
            <img src="/images/robert.png" alt="robert" />
          </div>
          <div className="flex flex-col mx-16 justify-around">
            <p className="">Robert Schaeffer</p>
            <p className="uppercase text-base">AMSTERDAM, The Netherlands</p>
            <p className="text-sm">book a call with Robert</p>
            <button className="w-5/6 text-base bg-white text-black uppercase rounded px-3 py-2">
              set a meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}