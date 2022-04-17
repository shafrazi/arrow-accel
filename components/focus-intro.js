import SlideTopText from "./slide-top-text";

export default function FocusIntro() {
  return (
    <div className="flex flex-col w-full tracking-wide">
      <SlideTopText>
        <div className="hidden md:block">
          <p className="" style={{ lineHeight: 1.6 }}>
            We love to build on big plans together
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            with our clients. To create. To make
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            things better. Our interests stretch across
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            many different industries and causes, but
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            they all have a better world in mind.
          </p>
        </div>
        <div className="md:hidden">
          <p className="" style={{ lineHeight: 1.6 }}>
            We love to build on big plans together with our clients. To create.
            To make things better. Our interests stretch across many different
            industries and causes, but they all have a better world in mind.
          </p>
        </div>
      </SlideTopText>
      <div
        className="w-full flex flex-col justify-center items-center text-white py-12 md:py-16 lg:py-[8rem]"
        style={{ backgroundColor: "#375aa9" }}
      >
        <div className="text-xs md:text-lg lg:text-2xl text-center w-full px-6 md:px-0 md:w-2/3 leading-relaxed">
          <p>
            Work with us to identify your goals, to clarify the challenges ahead
            and to strategize on solutions.
          </p>
          <p className="mt-6 md:mt-10">
            Free yourself and find your flow to move forward frictionless with
            first steps and renewed energy.
          </p>
        </div>
      </div>
      <div className="w-full">
        <img
          src="/images/build.png"
          className="w-full h-[50vh] md:h-full object-cover"
        />
      </div>
    </div>
  );
}
