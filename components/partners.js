export default function Partners() {
  return (
    <div className="flex flex-col w-full tracking-wide">
      <div className="w-full flex flex-col bg-black text-white justify-center items-center py-[8rem]">
        <h2 className="text-white text-5xl font-bold">Our partners</h2>
        <p className="text-white text-2xl mt-12 text-center w-2/5">
          Together with our partners, we organize teams, develop a strategy and
          create campaigns designed to capture attention and inspire
          imagination.
        </p>
        <p className="text-white text-2xl mt-12 text-center w-2/5">
          They work to the best of their ability, transforming your vision into
          the real and virtual world.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full px-[10rem] my-12">
        <div className="w-1/3 flex flex-col py-[10rem] text-xl text-center pr-10">
          T M M is a design studio which delivers graphic design and visual
          communication to clients and collaborators who are looking for
          engaging and strong output that is able to challenge expectations and
          goals.
        </div>
        <div className="w-1/3 flex flex-col py-[10rem] text-xl text-center bg-neutral-100 px-10">
          K-line achieves objectives through measurable and accountable
          marketing. They work as an extension of your team by filling the gaps
          with the right specialists. Our full-service capabilities allow us to
          provide professional recommendations a;nd solutions across every
          aspect of your marketing.
        </div>
        <div className="w-1/3 flex flex-col py-[10rem] text-xl text-center pl-10">
          Neely & Daughters is a think tank, creative incubator, and studio
          where visionary innovations are born. Neely & Daughters are renegade
          creatives producing revolutionary content embraced by millions over
          the world.
        </div>
      </div>
    </div>
  );
}
