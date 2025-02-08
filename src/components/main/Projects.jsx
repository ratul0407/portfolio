import { IoArrowUp } from "react-icons/io5";
import project1 from "../../assets/project-1.png";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.png";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const projectImgs = [
    { id: 1, img: project1, name: "Study House" },
    { id: 2, img: project2, name: "Car Heaven" },
    { id: 3, img: project3, name: "Chill Gamer" },
  ];
  const variants = {
    hidden: { opacity: 0, translateY: -20 },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, translateY: -20 },
    show: {
      opacity: 1,
      translateY: 0,
    },
  };
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={variants}
      id="Projects"
      className="lg:scroll-mt-36"
    >
      <div className="space-y-4 lg:space-y-6">
        <h3 className="section-heading">Projects</h3>
        <div className="grid grid-cols-1 items-center justify-center gap-8 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:gap-16">
          {/* project 1 */}
          {projectImgs.map(({ name, img, id }) => {
            return (
              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.3, delay: 0.3 * id }}
                key={id}
                className={`${id !== 3 ? "col-span-2" : "col-start-2 col-end-4"} space-y-6 self-center`}
              >
                <Link
                  to={`/projects/${id}`}
                  className="flex items-center text-xl font-bold underline"
                >
                  <span>.0{`${id} ${name}`}</span>{" "}
                  <IoArrowUp className="rotate-45" />
                </Link>
                <img
                  className="max-h-[400px] w-72 max-w-[500px] rounded-xl object-cover shadow-xl lg:w-full"
                  src={img}
                  alt={name}
                />
                <Link
                  to={`/projects/${id}`}
                  className="btn btn-neutral transition-all duration-500 hover:-translate-y-2 hover:bg-black/85"
                >
                  View Details
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
