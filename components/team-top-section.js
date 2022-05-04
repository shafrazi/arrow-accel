import Container from "./container";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function TeamTopSection() {
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
    <motion.div ref={ref} animate={control} initial={{ y: 300, opacity: 0 }}>
      <Container topMargin={16}>
        <div className="hidden lg:block w-1/2">
          <h2 className="text-4xl">Our team</h2>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-center">
          <div className="flex flex-col w-full">
            <h2 className="text-2xl md:text-xl lg:hidden">Our team</h2>
            <p
              className="text-base md:text-lg lg:text-xl mt-4"
              style={{ lineHeight: 1.6 }}
            >
              A strong, visionary strategy and creative team, directing projects
              together with specialized execution partners, each operating at
              the top of their respective fields of expertise.
            </p>
            <p
              className="text-base md:text-lg lg:text-xl mt-4"
              style={{ lineHeight: 1.6 }}
            >
              Together we help raise visibility, break into the marketplace and
              help secure funds for ground-breaking projects, disruptive ideas
              and companies in the Netherlands and around the globe.
            </p>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
