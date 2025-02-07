import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowUp, FaGithub } from "react-icons/fa";
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
  // console.log(project);
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
  return (
    <div className="mx-auto flex min-h-screen w-11/12 items-center justify-center 2xl:container 2xl:w-full">
      <div className="flex flex-col gap-8 shadow-xl lg:flex-row">
        <img className="w-full rounded-xl lg:w-1/2" src={img} />
        <div className="space-y-4">
          <p className="text-xl">{name}</p>
          <p>
            <strong>Project Overview: </strong>
            {description}
          </p>
          <p>
            <strong>Challenges Faced: </strong>
            {challenges}
          </p>
          <p>
            <strong>improvements: </strong>
            {improvements}
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4">
            {technologies?.map((item, index) => {
              console.log(item);
              return (
                <div
                  key={index}
                  className="flex w-fit items-center gap-4 rounded-full bg-slate-200 px-6 py-2 shadow-md"
                >
                  <p>{item.name}</p>
                  <img className="h-8 w-8" src={item.img} />
                </div>
              );
            })}
          </div>
          <div className="flex gap-4">
            <Link
              to={`${github_link}`}
              className="flex w-fit items-center gap-2 rounded-xl bg-slate-200 px-2 py-1"
            >
              View Repo
              <FaGithub size={30} />
            </Link>
            <Link
              to={`${live_site}`}
              className="flex w-fit items-center gap-2 rounded-xl bg-slate-200 px-2 py-1"
            >
              Live Site <FaArrowUp className="rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectLayout;
