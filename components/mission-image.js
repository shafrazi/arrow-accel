import LazyLoad from "react-lazyload";

export default function MissionImage() {
  return (
    <div className="w-full">
      <LazyLoad>
        <img
          src="/images/samurai.png"
          className="w-full h-[50vh] md:h-full object-cover"
        />
      </LazyLoad>
    </div>
  );
}
