import "animate.css";

export default function SlideTopText({ children }) {
  return (
    <div className="w-full h-[45vh] md:h-[40rem] flex flex-col justify-center text-base md:text-2xl">
      <div className="flex w-full">
        <div
          className="animate__animated animate__fadeInDown animate__slow w-3/4 lg:w-2/3 px-5 md:pl-[3rem] lg:pl-[5rem] tracking-wider leading-[50px] md:leading-loose text-xs md:text-xl lg:text-2xl"
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
