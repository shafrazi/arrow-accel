import Container from "./container";

export default function BuildItTopSection() {
  return (
    <Container backgroundColor={"bg-black"} verticalPadding={16}>
      <div className="w-full flex flex-col lg:flex-row text-white">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-2xl lg:text-6xl font-bold">
            Build it.
          </h2>
          <div
            className="text-xs md:text-base lg:text-xl mt-4 lg:mt-12"
            style={{ lineHeight: 1.6 }}
          >
            <p>
              To reach your goals, you need to translate your mission{" "}
              <span className="font-bold">effectively</span>, with an{" "}
              <span className="font-bold">understanding</span> of your audience,
              the brand you are building and why the world should{" "}
              <span className="font-bold">pay attention</span>.
            </p>
            <p className="mt-6">
              With our work, we aim to improve the conditions under which we all
              live and to be the forefront of the development of our joint
              future. Let's build it. Together.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
