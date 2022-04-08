import Container from "./container";

export default function ProjectsTopSection() {
  return (
    <Container backgroundColor={"bg-black"} verticalPadding={16}>
      <div
        className="w-full flex flex-col lg:flex-row text-white"
        id="projects"
      >
        <div className="w-3/4 lg:w-1/2">
          <h2 className="text-2xl md:text-xl lg:text-4xl font-bold">
            Projects/ Cases
          </h2>
          <p
            className="text-xs md:text-base lg:text-xl mt-4 lg:mt-12"
            style={{ lineHeight: 1.6 }}
          >
            We promote products, ideas and companies, that inspire and
            prioritize the best interest of the world and the quality of peoples
            lives.
          </p>
        </div>
      </div>
    </Container>
  );
}
