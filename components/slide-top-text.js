import "animate.css";

export default function SlideTopText({ children }) {
  return (
    <div className="w-full h-[90vh] md:h-[30rem] lg:h-[40rem] flex flex-col justify-center text-base md:text-2xl">
      <div className="flex w-full justify-center">
        <div
          className="w-10/12 tracking-wider leading-[30px] md:leading-loose text-[18px] md:text-2xl lg:text-[35px]"
          style={{
            fontFamily: "OpenSauceOne",
            lineHeight: 1.6,
            fontWeight: "normal",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
