import Container from "./container";

export default function OurFuture() {
  return (
    <Container topMargin={0} verticalPadding={16}>
      <div className="hidden lg:block w-1/2">
        <h2 className="text-4xl">Our future</h2>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-center">
        <div className="flex flex-col w-full">
          <h2 className="text-2xl md:text-2xl lg:hidden">Our future</h2>
          <p
            className="text-base md:text-lg lg:text-xl mt-4"
            style={{ lineHeight: 1.6 }}
          >
            Our current economic system rewards exploitation and harm. Our focus
            lies on how to transition to nature-based solutions, bio-mimetic
            technologies and transition analysis which can be applied to any
            industry.
          </p>
          <p
            className="text-base md:text-lg lg:text-xl mt-4"
            style={{ lineHeight: 1.6 }}
          >
            <span className="font-bold">Transitions</span> have social and
            communicative challenges constituting behavioral change, change
            management, disruption and resistance. The future is closer than it
            seems as opportunities abound.
          </p>
          <p
            className="text-base md:text-lg lg:text-xl mt-4"
            style={{ lineHeight: 1.6 }}
          >
            <span className="font-bold">Transformations</span> produce
            real-world outcomes which vary greatly by industry and between
            competitors, cascading through value chains, defined by the focus
            and acceleration of technological transitions today.
          </p>
        </div>
      </div>
    </Container>
  );
}
