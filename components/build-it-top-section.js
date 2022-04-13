import Container from "./container";

export default function BuildItTopSection() {
  return (
    <Container backgroundColor={"bg-black"} verticalPadding={16}>
      <div className="w-full flex flex-col lg:flex-row text-white">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-xl lg:text-4xl font-bold">
            Build it.
          </h2>
          <div
            className="text-xs md:text-base lg:text-xl mt-4 lg:mt-12"
            style={{ lineHeight: 1.6 }}
          >
            <p>
              We love to build on big plans together with our clients. To
              create. To make things better. Our interests stretch across many
              different industries and causes, but they all have a better world
              in mind.
            </p>
            <p className="mt-6">
              Our focus lies just there: To improve conditions under which we
              all live and to be the forefront of the development of our joint
              future. Let's build it. Together.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
