export default function TeamCard({
  image,
  name,
  position,
  location,
  description,
}) {
  return (
    <div className="w-full md:px-0 mt-5 md:mt-10 flex items-center">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex space-x-5">
          <div className="flex items-center w-20 md:w-30 lg:w-40">
            <img
              src={image}
              className="rounded-full bg-black w-full self-start"
            />
          </div>
          <div className="w-8/12 flex flex-col py-2 h-[5rem] lg:h-[8rem]">
            <p className="text-base md:text-lg lg:text-xl">{name},</p>
            <p
              className="text-base md:text-lg lg:text-xl"
              style={{ marginBottom: "auto" }}
            >
              {position}
            </p>
            <div className="flex flex-col w-full">
              <p
                className="text-[8px] md:text-[9px] lg:text-[12px] font-bold uppercase"
                style={{ marginTop: "auto" }}
              >
                {location}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0 text-xs md:text-base lg:text-lg">
          <p>{description}</p>
        </div>
      </div>
    </div>
    // <div className="flex items-center space-x-4">
    //   <div className="flex-shrink-0">
    //     <img
    //       className="w-20 h-20 bg-black rounded-full"
    //       src="/images/robert.png"
    //       alt="Neil image"
    //     />
    //   </div>
    //   <div className="flex-1 min-w-0">
    //     <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
    //       {name}
    //     </p>
    //     <p className="text-sm text-gray-500 truncate dark:text-gray-400">
    //       {position}
    //     </p>
    //     <p className="text-sm text-gray-500 truncate dark:text-gray-400">
    //       {location}
    //     </p>
    //   </div>
    //   <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
    //     $320
    //   </div>
    // </div>
  );
}
