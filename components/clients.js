import Container from "./container";

export default function Clients() {
  return (
    <Container>
      <div className="hidden md:block w-1/2"></div>
      <div className="flex flex-col w-full md:w-1/2 justify-center items-center">
        <div className="w-10/12 flex flex-col md:w-full">
          <h2 className="text-2xl md:text-xl lg:text-2xl font-bold">
            Our clients
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl mt-4"
            style={{ lineHeight: 1.6 }}
          >
            We have serviced brands, organizations, start-ups and artists, using
            insight and creativity to launch ideas across the globe.
          </p>
          <p
            className="text-base md:text-lg lg:text-xl mt-4"
            style={{ lineHeight: 1.6 }}
          >
            Our clients confide in us to translate their vision into action.
            ARROW ACCEL helps pave the road from concept to creation.
          </p>
        </div>
      </div>
    </Container>
  );
}
