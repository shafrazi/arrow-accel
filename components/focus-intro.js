export default function FocusIntro() {
  return (
    <div className="flex flex-col w-full tracking-wide">
      <div className="flex w-full mt-[8rem]">
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
      <div className="w-full flex flex-col md:flex-row"></div>
    </div>
  );
}
