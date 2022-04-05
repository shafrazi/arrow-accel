import Container from "./container";

export default function TeamTopSection() {
  return (
    <Container topMargin={16}>
      <div className="hidden lg:block w-1/2">
        <h2 className="text-4xl font-bold">Our team</h2>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-center">
        <div className="flex flex-col w-full">
          <h2 className="text-2xl md:text-xl lg:hidden font-bold">Our team</h2>
          <p
            className="text-base md:text-lg lg:text-xl mt-4"
            style={{ lineHeight: 1.6 }}
          >
            A strong, visionary strategy and creative team, directing projects
            together with specialized execution partners, each operating at the
            top of their respective fields of expertise.
          </p>
          <p
            className="text-base md:text-lg lg:text-xl mt-4"
            style={{ lineHeight: 1.6 }}
          >
            Together we help raise visibility, break into the marketplace and
            help secure funds for ground-breaking projects, disruptive ideas and
            companies in the Netherlands and around the globe.
          </p>
        </div>
      </div>
    </Container>
  );
}
