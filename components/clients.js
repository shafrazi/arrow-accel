import Container from "./container";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Clients() {
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
        <div className="hidden md:block w-1/2">
          <h2 className="md:text-2xl lg:text-4xl">Our clients</h2>
        </div>
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center">
          <div className="flex flex-col w-full">
            <h2 className="md:hidden text-2xl md:text-xl lg:text-2xl">
              Our clients
            </h2>
            <p
              className="text-base md:text-lg lg:text-xl mt-4"
              style={{ lineHeight: 1.6 }}
            >
              We have serviced brands, organizations, start-ups and artists,
              using insight and creativity to launch ideas across the globe.
            </p>
            <p
              className="text-base md:text-lg lg:text-xl mt-4"
              style={{ lineHeight: 1.6 }}
            >
              Our clients confide in us to translate their vision into action.
              ARROW ACCEL helps pave the road from concept to creation.
            </p>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
