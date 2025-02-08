import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowUp, FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

function ProjectLayout() {
  const { id } = useParams();
  console.log(id);
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const item = data.find((item) => item.id === id);
        console.log(item);
        return setProject(item);
      });
  }, []);
  const {
    name,
    improvements,
    challenges,
    live_site,
    github_link,
    description,
    img,
    technologies,
  } = project || {};
  console.log(github_link);
  console.log(technologies);
  const variants = {
    initial: {
      opacity: 0,
      translateY: -20,
    },
    animate: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.5,
      },
    },
  };
  const childVariants = {
    initial: { opacity: 0, translateY: -20 },
    animate: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="mx-auto flex min-h-screen w-11/12 items-center justify-center 2xl:container 2xl:w-full">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-8 py-12 shadow-xl lg:flex-row"
      >
        <motion.img
          variants={childVariants}
          className="w-full rounded-xl lg:w-1/2"
          src={img}
        />
        <div className="space-y-4 lg:space-y-6">
          <motion.p variants={childVariants} className="text-xl">
            {name}
          </motion.p>
          <motion.p variants={childVariants}>
            <strong>Project Overview: </strong>
            {description}
          </motion.p>
          <motion.p variants={childVariants}>
            <strong>Challenges Faced: </strong>
            {challenges}
          </motion.p>
          <motion.p variants={childVariants}>
            <strong>improvements: </strong>
            {improvements}
          </motion.p>
          <motion.p variants={childVariants}>
            <strong>Technologies Used: </strong>
          </motion.p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4">
            {technologies?.map((item, index) => {
              console.log(item);
              return (
                <motion.div
                  initial={{ opacity: 0, translateY: -50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 * index }}
                  key={index}
                  className="flex w-fit items-center gap-4 rounded-full bg-slate-200 px-6 py-2 shadow-md"
                >
                  <p>{item.name}</p>
                  <img className="h-8 w-8" src={item.img} />
                </motion.div>
              );
            })}
          </div>
          <div className="flex gap-4">
            <Link
              target="_blank"
              to={`${github_link}`}
              className="flex w-fit items-center gap-2 rounded-xl bg-slate-200 px-2 py-1"
            >
              View Repo
              <FaGithub size={30} />
            </Link>
            <Link
              target="_blank"
              to={`${live_site}`}
              className="flex w-fit items-center gap-2 rounded-xl bg-slate-200 px-2 py-1"
            >
              Live Site <FaArrowUp className="rotate-45" />
            </Link>
          </div>
          <Link className="btn btn-neutral hover:bg-black/85" to={-1}>
            View More projects
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectLayout;
