import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function GetToKnow() {
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
    <motion.div
      className="relative"
      ref={ref}
      animate={control}
      initial={{ y: 300, opacity: 0 }}
    >
      <div className="flex w-full relative justify-center items-center">
        <div className="flex w-10/12">
          <div className="hidden lg:block w-5/12 md:py-[8vw]">
            <h2 className="text-lg md:text-2xl lg:text-4xl">We're creative</h2>
            <h2 className="text-lg md:text-2xl lg:text-4xl">consultants</h2>
          </div>
          <div
            className="w-full lg:w-7/12 flex flex-col justify-center text-base text-left md:text-lg lg:text-xl tracking-wide py-[6rem] lg:px-[5vw] md:py-[8vw]"
            style={{ lineHeight: 1.6 }}
          >
            <h2 className="lg:hidden text-2xl" style={{ lineHeight: 1.4 }}>
              We're creative
            </h2>
            <h2 className="lg:hidden text-2xl" style={{ lineHeight: 1.4 }}>
              consultants
            </h2>
            <p className="mt-6">
              We are lateral thinkers that provide expert advice and bold ideas,
              the people and the tools to create real-life results.
            </p>
            <p className="mt-6">
              Our experience, knowledge and ability to quickly grasp complex
              matter and theory, accelerates creative design and your
              go-to-market trajectory. We work systematically, with deep
              understanding on how projects and ideas are financed, structured
              and redistributed.
            </p>
            <p className="mt-6">
              We work systematically, with deep understanding on how projects
              and ideas are financed, structured and redistributed.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
