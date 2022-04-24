import LazyLoad from "react-lazyload";

export default function SmallStepsImage() {
  return (
    <div className="w-full bg-gradient-to-t to-white relative">
      <LazyLoad>
        <img
          src="/images/woman-looking.png"
          className="w-full h-[50vh] md:h-full object-cover"
        />
      </LazyLoad>
    </div>
  );
}
