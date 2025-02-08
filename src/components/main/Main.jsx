import AboutMe from "./AboutMe";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function Main() {
  return (
    <div className="flex flex-col gap-8 py-8 sm:gap-12 md:gap-16 lg:gap-60 lg:py-20">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default Main;
