import Container from "./container";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Partners() {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
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
    <motion.div ref={ref} animate={control} initial={{ y: 300, opacity: 0 }}>
      <Container topMargin={16}>
        <div className="hidden lg:block w-1/2">
          <h2 className="text-4xl">Our partners</h2>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-center">
          <div className="flex flex-col w-full">
            <h2 className="text-2xl md:text-2xl lg:hidden">Our partners</h2>
            <p
              className="text-base md:text-lg lg:text-xl mt-4"
              style={{ lineHeight: 1.6 }}
            >
              Together with our partners, we organize teams, develop a strategy
              and create campaigns designed to capture attention and inspire
              imagination.
            </p>
            <p
              className="text-base md:text-lg lg:text-xl mt-4"
              style={{ lineHeight: 1.6 }}
            >
              They work to the best of their ability, transforming your vision
              into the real and virtual world.
            </p>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
