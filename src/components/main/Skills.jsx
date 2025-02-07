import react from "../../assets/react-icon.svg";
import css from "../../assets/css.svg";
import nodejs from "../../assets/nodejs.svg";
import tailwind from "../../assets/tailwind.svg";
import express from "../../assets/expressjs.svg";
import firebaseImg from "../../assets/firebase.svg";
import jsImg from "../../assets/js.svg";
import mongodbImg from "../../assets/mongodb.png";
function Skills() {
  const skills = [
    { img: react, text: "React" },
    { img: tailwind, text: "TailwindCSS" },
    { img: nodejs, text: "NodeJS" },
    { img: express, text: "ExpressJS" },
    { img: firebaseImg, text: "Firebase" },
    { img: mongodbImg, text: "Mongodb" },
    { img: css, text: "css" },
    { img: jsImg, text: "Javascript" },
  ];
  return (
    <section>
      <div className="space-y-4 md:space-y-6 lg:flex lg:flex-row-reverse lg:justify-between">
        <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl">Skills</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3">
          {skills.map(({ img, text }, index) => {
            return (
              <div
                key={index}
                className="flex w-fit items-center gap-4 rounded-full bg-slate-200 px-6 py-2 shadow-md"
              >
                <p>{text}</p>
                <img className="h-8 w-8" src={img} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
