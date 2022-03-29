export default function SlideTopText({ children }) {
  return (
    <div className="w-full flex flex-col my-4 md:my-16 lg:my-[8rem]">
      <div className="flex w-full">
        <div
          className="w-full md:w-3/4 lg:w-2/3 px-5 md:pl-[3rem] lg:pl-[5rem] mt-6 tracking-wider md:leading-loose text-base md:text-xl lg:text-2xl"
          style={{ fontFamily: "OpenSauceOne" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
