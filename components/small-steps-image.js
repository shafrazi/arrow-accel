import LazyLoad from "react-lazyload";
import { ParallaxBanner } from "react-scroll-parallax";

export default function SmallStepsImage() {
  return (
    <div className="w-full bg-gradient-to-t to-white relative">
      {/* <LazyLoad>
        <img
          src="/images/woman-looking.png"
          className="w-full h-[50vh] md:h-full object-cover"
        />
      </LazyLoad> */}
      <ParallaxBanner
        layers={[
          {
            image: "/images/woman-looking.png",
            speed: -20,
          },
        ]}
        className="w-full h-[20vh] md:h-[50vh] lg:h-[500px] object-cover"
      />
    </div>
  );
}
