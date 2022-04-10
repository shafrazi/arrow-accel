export default function MissionItem({ icon, title, description }) {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-black text-white tracking-wide py-8 md:py-10 lg:py-[3rem]">
      <div className="flex flex-col w-2/3 md:w-2/3 justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center text-[60px] md:text-[60px] lg:text-[80px]">
          {icon.map((icon, index) => {
            return icon;
          })}
        </div>
        <div className="text-xl md:text-2xl text-center w-2/3 mt-6 md:mt-9 leading-relaxed uppercase">
          {title}
        </div>
        <p className="text-[14px] md:text-xl text-center w-full md:w-10/12 lg:w-8/12 mt-6 md:mt-9 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
