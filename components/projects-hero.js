import Image from "next/image";
import Container from "./container";
import LazyLoad from "react-lazyload";

export default function ProjectsHero() {
  return (
    <div className="w-full relative">
      <LazyLoad>
        <img
          src="/images/projects-hero-image.png"
          className="w-full h-[50vh] md:h-full object-cover"
        />
      </LazyLoad>
      <div className="flex w-full h-full md:bg-opacity-25 absolute top-[0rem] md:bottom-[0rem]">
        <Container>
          <div className="w-full flex md:justify-center items-center text-center">
            <div className="w-1/2 hidden md:block"></div>
            <div className="w-full md:w-1/2">
              <h1 className="tracking-wide text-white text-left text-[20px] md:text-3xl lg:text-[38px]">
                Projects/ Cases
              </h1>
              <p
                className="tracking-wide mt-8 text-[14px] md:text-xl lg:text-[27px] text-left font-semibold text-white"
                style={{ fontFamily: "OpenSauceOne", fontWeight: "normal" }}
              >
                We promote products, ideas and companies, that inspire and
                prioritize the best interest of the world and the quality of
                peoples lives.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
