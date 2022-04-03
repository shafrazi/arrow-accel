import Container from "./container";

export default function ContactBanner() {
  return (
    <Container backgroundColor={"bg-black"} topMargin={0}>
      <div className="flex w-full flex-col py-16 md:flex-row">
        <div className="flex flex-col w-full items-center md:items-start md:w-1/2 text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Let's work together
          </h2>
          <p className="md:hidden mt-10 text-center">
            The future holds all potential. Work with us and let's punch te
            petal to progress together. We have the drive for it!
          </p>
          <div className="flex flex-col w-9/12 md:w-11/12 lg:w-8/12 mt-[6rem] md:mt-[3rem]">
            <button className="w-full text-base md:w-10/12 self-start border-white border-solid border-2 mt-8 text-white uppercase py-2 px-2 rounded tracking-wide">
              send us an email
            </button>
            <button className="w-full text-base md:w-10/12 self-start border-white border-solid border-2 mt-8 text-white uppercase py-2 px-2 rounded tracking-wide">
              schedule a call
            </button>
          </div>
        </div>
        <div className="hidden md:flex flex-col w-full items-center md:items-start md:w-1/2 text-white">
          <p
            className="mt-10 md:text-lg lg:text-xl"
            style={{ lineHeight: 1.6 }}
          >
            The future holds all potential. Work with us and let's punch te
            petal to progress together. We have the drive for it!
          </p>
        </div>
      </div>
    </Container>
  );
}