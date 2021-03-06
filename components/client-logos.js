import Container from "./container";
import { InView } from "react-intersection-observer";

export default function ClientLogos() {
  return (
    <Container backgroundColor="bg-orange-50" topMargin={16}>
      <InView>
        {({ inView, ref, entry }) => (
          <div
            ref={ref}
            className={`${
              inView && "animate__animated animate__fadeInRight animate__slow"
            } grid grid-cols-2 md:grid-cols-3 gap-x-5 md:gap-x-10 gap-y-2 justify-items-center w-full`}
          >
            <img src="/images/logos/affirm.png" className="w-20 md:w-[12rem]" />
            <img src="/images/logos/neely.png" className="w-20 md:w-[12rem]" />
            <img
              src="/images/logos/safeway.png"
              className="w-20 md:w-[12rem]"
            />
            <img src="/images/logos/nortek.png" className="w-20 md:w-[12rem]" />
            <img
              src="/images/logos/gov-neth.png"
              className="w-20 md:w-[12rem]"
            />
            <img
              src="/images/logos/woodstock.png"
              className="w-20 md:w-[12rem]"
            />
            <img src="/images/logos/lazein.png" className="w-20 md:w-[12rem]" />
            <img src="/images/logos/mulder.png" className="w-20 md:w-[12rem]" />
            <img
              src="/images/logos/founder.png"
              className="w-20 md:w-[12rem]"
            />
            <img
              src="/images/logos/sustainable.png"
              className="w-20 md:w-[12rem]"
            />
            <img src="/images/logos/ars.png" className="w-20 md:w-[12rem]" />
            <img src="/images/logos/antler.png" className="w-20 md:w-[12rem]" />
          </div>
        )}
      </InView>
    </Container>
  );
}
