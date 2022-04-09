import SlideTopText from "./slide-top-text";

export default function FocusIntro() {
  return (
    <div className="flex flex-col w-full tracking-wide">
      <SlideTopText>
        <div className="hidden md:block">
          <p className="" style={{ lineHeight: 1.6 }}>
            Our current economic system rewards
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            exploitation and harm. Our focus lies on how
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            to transition to nature-based solutions, bio-
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            mimetic technologies and transition analysis
          </p>
          <p className="" style={{ lineHeight: 1.6 }}>
            which can be applied to any industry.
          </p>
        </div>
        <div className="md:hidden">
          <p className="" style={{ lineHeight: 1.6 }}>
            Our current economic system rewards exploitation and harm. Our focus
            lies on how to transition to nature-based solutions, bio-mimetic
            technologies and transition analysis which can be applied to any
            industry.
          </p>
        </div>
      </SlideTopText>

      <div className="w-full flex flex-col lg:flex-row justify-center h-screen md:h-full bg-black text-white px-10 lg:px-[10rem] lg:py-[8rem] text-[14px] md:text-lg lg:text-2xl leading-relaxed">
        <div className="w-full lg:w-1/2 py-6 md:py-12 lg:py-0 lg:pr-16">
          <p className="text-center md:text-left">
            <span className="font-bold">Transitions</span> have social and
            communicative challenges constituting behavioral change, change
            management, disruption and resistance. The future is closer than it
            seems as opportunities abound.
          </p>
        </div>
        <div className="w-full lg:w-1/2 py-6 md:py-12 lg:py-0 lg:pl-16">
          <p className="text-center md:text-left">
            <span className="font-bold">Transformations</span> produce
            real-world outcomes which vary greatly by industry and between
            competitors, cascading through value chains, defined by the focus
            and acceleration of technological transitions today.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-12 md:py-16 lg:py-[8rem]">
        <div className="text-xs md:text-lg lg:text-2xl text-center w-full px-10 md:px-0 md:w-2/3 lg:w-2/3 leading-relaxed">
          <p>To reach your goals, you need to translate your</p>
          <p>mission effectively, with an understanding of</p>
          <p>your audience, the and you are building and</p>
          <p>why the world should pay attention.</p>
        </div>
      </div>
    </div>
  );
}
