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
            <p>We love a good cup of coffee, on a sunny</p>
            <p>terrace in Amsterdam Centre for instance!</p>
            <p>Let's discuss your bold ideas or outrageous</p>
            <p>plans and determine your new course of</p>
            <p>action from there.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
