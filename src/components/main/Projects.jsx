import { IoArrowUp } from "react-icons/io5";
import project1 from "../../assets/project-1.png";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.png";
import { Link } from "react-router-dom";
function Projects() {
  const projectImgs = [
    { img: project1, name: "Study House" },
    { img: project2, name: "Car Heaven" },
    { img: project3, name: "Chill Gamer" },
  ];
  return (
    <section id="Projects" className="lg:scroll-mt-36">
      <div className="space-y-4 lg:space-y-6">
        <h3 className="section-heading">Projects</h3>
        <div className="grid grid-cols-1 items-center justify-center gap-8 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:gap-16">
          {/* project 1 */}
          {projectImgs.map(({ img, name }, index) => {
            return (
              <div
                key={index}
                className={`${index !== 2 ? "col-span-2" : "col-start-2 col-end-4"} space-y-6 self-center`}
              >
                <Link
                  to={`/projects/${++index}`}
                  className="flex items-center text-xl font-bold underline"
                >
                  <span>.0{`${++index} ${name}`}</span>{" "}
                  <IoArrowUp className="rotate-45" />
                </Link>
                <img
                  className="max-h-[400px] w-72 max-w-[500px] rounded-xl object-cover shadow-xl lg:w-full"
                  src={img}
                  alt={name}
                />
                <Link
                  to={`/projects/${++index}`}
                  className="btn btn-neutral transition-all duration-500 hover:-translate-y-2 hover:bg-black/85"
                >
                  View Details
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
