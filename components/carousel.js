import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MoveForwardBanner from "./move-forward-banner";
import CanvasBanner from "./canvas-banner";

export default function Carousel() {
  const items = [<MoveForwardBanner />, <CanvasBanner />];
  return (
    <div className="flex flex-col items-center justify-center">
      <AliceCarousel
        items={items}
        autoPlay={true}
        infinite
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        disableButtonsControls
      />
    </div>
  );
}
