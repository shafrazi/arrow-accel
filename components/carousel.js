import MoveForwardBanner from "./move-forward-banner";
import CanvasBanner from "./canvas-banner";
import GetSetBanner from "./get-set-banner";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Slider } from "react-responsive-carousel";

export default function Carousel() {
  const items = [<MoveForwardBanner />, <GetSetBanner />, <CanvasBanner />];
  return (
    <div className="flex flex-col">
      {/* <AliceCarousel
        items={items}
        autoPlay={true}
        infinite
        autoPlayStrategy="none"
        autoPlayInterval={12000}
        disableDotsControls={true}
        disableButtonsControls={true}
        animationDuration={1500}
        // animationType="fadeout"
      /> */}
      <Slider
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        interval={12000}
        animationHandler="fade"
        stopOnHover={false}
        swipeable={false}
        transitionTime={700}
      >
        <MoveForwardBanner />
        <GetSetBanner />
        <CanvasBanner />
      </Slider>
    </div>
  );
}
