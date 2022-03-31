import "animate.css";

export default function SlideTopText({ children }) {
  return (
    <div className="w-full h-[20rem] flex flex-col justify-center my-4 md:my-16 lg:my-[8rem] text-2xl">
      <div className="flex w-full">
        <div
          className="animate__animated animate__fadeInDown animate__slow w-full md:w-3/4 lg:w-2/3 px-5 md:pl-[3rem] lg:pl-[5rem] mt-6 tracking-wider leading-[50px] md:leading-loose"
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
