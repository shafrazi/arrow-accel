import Container from "./container";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function AboutWhatWeDo() {
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
      <Container verticalPadding={16}>
        <div className="hidden lg:block w-1/2">
          <h2 className="md:text-2xl lg:text-4xl">What we do</h2>
        </div>
        <div className="mt-12 md:mt-0 flex flex-col w-full lg:w-1/2 justify-center items-center">
          <div className="flex flex-col w-full">
            <h2 className="lg:hidden text-2xl md:text-xl lg:text-2xl">
              What we do
            </h2>
            <p
              className="text-base md:text-lg lg:text-xl mt-4 lg:text-left"
              style={{ lineHeight: 1.6 }}
            >
              We improve advertising campaigns, creative ideas or other art
              projects and balance the commercial viability of a project against
              the goals of our clients.
            </p>
            <p
              className="text-base md:text-lg lg:text-xl mt-4 lg:text-left"
              style={{ lineHeight: 1.6 }}
            >
              We create concepts, shape ideas, form teams and together, we move
              them to where they need to be.
            </p>
            <p
              className="text-base md:text-lg lg:text-xl mt-4 lg:text-left"
              style={{ lineHeight: 1.6 }}
            >
              We partner with the brands of the future, innovative
              entrepreneurs, change-makers, climatechange leaders and visionary
              entertainment professionals committed to maximizing their
              real-life impact and contribution to a sustainable future.
            </p>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
