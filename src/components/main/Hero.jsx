import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../../assets/profile.png";
import { motion } from "motion/react";
function Hero() {
  return (
    <section
      id="Home"
      className="flex flex-col items-center justify-between gap-8 lg:scroll-mt-40 lg:flex-row lg:gap-0"
    >
      {/* introduction */}
      <motion.div className="space-y-4 text-center lg:text-left">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="section-heading lg:text-7xl"
        >
          Hi, There I&apos;m Ratul
        </motion.h3>
        <motion.p
          initial={{ translateX: "20%", opacity: 0 }}
          animate={{ translateX: "0%", opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:text-4xl"
        >
          I&apos;m a <strong> React Developer</strong>
        </motion.p>
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, translateY: "50%" }}
          animate={{ opacity: 1, translateY: "0%" }}
          transition={{ duration: 0.5, delay: 1, ease: "linear" }}
        >
          <a href="https://www.github.com/ratul0407" target="_blank">
            <FaGithub size={35} />
          </a>
          <a href="https://www.linkedin.com/in/ratul0407" target="_blank">
            <FaLinkedin size={35} />
          </a>
          <button className="btn btn-neutral lock hover:bg-black/85">
            Download Resume
          </button>
        </motion.div>
      </motion.div>
      {/* img */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, translateY: "150px" }}
        animate={{ scale: 1, opacity: 1, translateY: "0px" }}
        transition={{ duration: 1.5, delay: 1, ease: "anticipate" }}
      >
        <div className="z-10 flex h-80 w-80 items-center justify-center rounded-full bg-white">
          <img className="mx-auto h-52 grayscale-100" src={profileImg} />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
