export default function AboutWhatWeDo() {
  return (
    <div className="flex flex-col w-full tracking-wide mt-[5rem] mb-[5rem]">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 py-12 flex pr-16 pb-16">
          <img src="/images/what-we-do.png" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center pr-[10rem]">
          <h2 className="tracking-wide text-lg md:text-3xl uppercase">
            What we do
          </h2>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            We improve advertising campaigns, creative ideas or other art
            projects and balance the commercial viability of a project against
            the goals of our clients.
          </p>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            We create concepts, shape ideas, form teams and together, we move
            them to where they need to be.
          </p>
          <p className="tracking-wide text-lg md:text-2xl mt-10">
            We partner with the brands of the future, innovative entrepreneurs,
            change-makers, climatechange leaders and visionary entertainment
            professionals committed to maximizing their real-life impact and
            contribution to a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}
