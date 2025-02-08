import { motion, useInView } from "motion/react";
import { useRef } from "react";
function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={variants}
      ref={ref}
      className="space-y-4 py-8 sm:space-y-6 lg:flex lg:scroll-mt-60 lg:justify-between"
      id="About"
    >
      <motion.h3
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        className="section-heading"
      >
        About Me
      </motion.h3>
      <div className="space-y-4 text-gray-600 sm:space-y-6 lg:w-1/2">
        <motion.p variants={itemVariants}>
          Hello, My name is MD. Rajaul Islam Ratul. And I am a
          <strong> React Developer.</strong> I usually work with react and
          tailwindcss. But I&apos;m not afraid to go outside of my comfort zone.
        </motion.p>
        <motion.p variants={itemVariants}>
          I have been practicing my skill of web development over the past 1 and
          a half year. And I am not perfect but I&apos;m passionate. Apart from
          Coding I like to play cricket and video games.
        </motion.p>
        <motion.p variants={itemVariants}>
          My Dream is to create something that will one day inspire many!
        </motion.p>
      </div>
    </motion.div>
  );
}

export default AboutMe;
