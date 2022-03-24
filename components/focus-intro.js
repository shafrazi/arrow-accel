export default function FocusIntro() {
  return (
    <div className="flex flex-col w-full tracking-wide">
      <div className="flex w-full my-[8rem]">
        <div
          className="w-1/2 px-[10rem] mt-6 tracking-wider leading-loose"
          style={{
            fontFamily: "OpenSauceOne",
            fontWeight: "normal",
          }}
        >
          <p className="text-2xl" style={{ lineHeight: 1.6 }}>
            Our current economic system rewards exploitation and harm. Our focus
            lies on how to transition to nature-based solutions, bio-mimetic
            technologies and transition analysis which can be applied to any
            industry.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row bg-black text-white px-[10rem] py-[8rem] text-2xl leading-relaxed">
        <div className="w-1/2 pr-16">
          <p className="">
            <span className="font-bold">Transitions</span> have social and
            communicative challenges constituting behavioral change, change
            management, disruption and resistance. The future is closer than it
            seems as opportunities abound.
          </p>
        </div>
        <div className="w-1/2 pl-16">
          <p className="">
            <span className="font-bold">Transformations</span> produce
            real-world outcomes which vary greatly by industry and between
            competitors, cascading through value chains, defined by the focus
            and acceleration of technological transitions today.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-[8rem]">
        <p className="text-2xl text-center w-1/3 leading-relaxed">
          To reach your goals, you need to translate your mission effectively,
          with an understanding of your audience, the and you are building and
          why the world should pay attention.
        </p>
      </div>
    </div>
  );
}
