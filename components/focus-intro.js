import SlideTopText from "./slide-top-text";
import { ParallaxBanner } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function FocusIntro() {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      control.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 20,
        },
      });
    }
  }, [inView]);

  return (
    <div className="flex flex-col w-full tracking-wide">
      <motion.div ref={ref} animate={control} initial={{ y: 300, opacity: 0 }}>
        <SlideTopText>
          <div className="hidden md:block">
            <p className="" style={{ lineHeight: 1.6 }}>
              We love to build on big plans together
            </p>
            <p className="" style={{ lineHeight: 1.6 }}>
              with our clients. To create. To make
            </p>
            <p className="" style={{ lineHeight: 1.6 }}>
              things better. Our interests stretch across
            </p>
            <p className="" style={{ lineHeight: 1.6 }}>
              many different industries and causes, but
            </p>
            <p className="" style={{ lineHeight: 1.6 }}>
              they all have a better world in mind.
            </p>
          </div>
          <div className="md:hidden">
            <p className="" style={{ lineHeight: 1.6 }}>
              We love to build on big plans together with our clients. To
              create. To make things better. Our interests stretch across many
              different industries and causes, but they all have a better world
              in mind.
            </p>
          </div>
        </SlideTopText>
      </motion.div>
      <div
        className="w-full flex flex-col justify-center items-center text-white py-12 md:py-16 lg:py-[8rem]"
        style={{ backgroundColor: "#375aa9" }}
      >
        <div className="text-xs md:text-lg lg:text-2xl text-center w-full px-6 md:px-0 md:w-2/3 leading-relaxed">
          <p>
            Work with us to identify your goals, to clarify the <br />
            challenges ahead and to strategize on solutions.
          </p>
          <p className="mt-6 md:mt-10">
            Free yourself and find your flow to move forward <br />
            frictionless with first steps and renewed energy.
          </p>
        </div>
      </div>

      {/* <img
          src="/images/build.png"
          className="w-full h-[50vh] md:h-full object-cover"
        /> */}
      {/* <Parallax
        bgImage="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
        strength={500}
        // bgImageStyle={{ height: "auto" }}
        // bgClassName="object-cover w-full h-[50vh] md:h-full"
      >
        <div>
          <div style={{ height: 500 }}></div>
        </div>
      </Parallax> */}
      <div className="w-full">
        <ParallaxBanner
          layers={[
            {
              image: "/images/build.png",
              speed: -20,
            },
          ]}
          className="w-[100%] h-[50vh] lg:h-[500px]"
        />
      </div>
    </div>
  );
}
