import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MoveForwardBanner from "./move-forward-banner";
import CanvasBanner from "./canvas-banner";
import GetSetBanner from "./get-set-banner";

export default function Carousel() {
  const items = [<MoveForwardBanner />, <GetSetBanner />, <CanvasBanner />];
  return (
    <div className="flex flex-col items-center justify-center">
      <AliceCarousel
        items={items}
        autoPlay={true}
        infinite
        autoPlayStrategy="none"
        autoPlayInterval={12000}
        disableDotsControls={true}
        disableButtonsControls={true}
        animationDuration={1500}
        // animationType="fadeout"
      />
    </div>
  );
}
