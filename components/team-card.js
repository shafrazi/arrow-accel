export default function TeamCard({
  image,
  name,
  position,
  location,
  description,
}) {
  return (
    <div className="w-full flex md:w-1/2 justify-center items-center">
      <div className="w-full md:w-10/12 flex flex-col">
        <div className="w-full flex space-x-5">
          <div className="flex items-center w-3/12 md:w-4/12 lg:w-3/12">
            <img src={image} className="rounded-full bg-black w-100 h-100" />
          </div>
          <div className="w-8/12 flex flex-col pt-2">
            <p className="text-base md:text-xl lg:text-2xl">{name},</p>
            <p className="text-base md:text-xl lg:text-2xl pt-2">{position}</p>
            <div className="flex flex-col h-full py-5 w-full justify-end">
              <p className="font-bold uppercase">{location}</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-2 md:mt:4 lg:mt-8 text-base md:text-xl lg:text-xl">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
