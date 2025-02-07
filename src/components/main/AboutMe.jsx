import { motion } from "motion/react";
function AboutMe() {
  return (
    <motion.div
      className="space-y-4 py-8 sm:space-y-6 lg:flex lg:justify-between"
      id="About"
    >
      <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl">About Me</h3>
      <div className="space-y-4 text-gray-600 sm:space-y-6 lg:w-1/2">
        <p>
          Hello, My name is MD. Rajaul Islam Ratul. And I am a{" "}
          <strong className="underline">React Developer.</strong> I usually work
          with react and tailwindcss. But I&apos;m not afraid to go outside of
          my comfort zone.
        </p>
        <p>
          I have been practicing my skill of web development over the past 1 and
          a half year. And I am not perfect but I&apos;m passionate.
        </p>
        <p>My Dream is to create something that will one day inspire many!</p>
      </div>
    </motion.div>
  );
}

export default AboutMe;
