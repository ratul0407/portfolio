import profileImg from "../../assets/profile.png";
function Main() {
  return (
    <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
      {/* introduction */}
      <div className="space-y-4 text-center lg:text-left">
        <h3 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl">
          Hi, There I&apos;m Ratul
        </h3>
        <p className="lg:text-4xl">
          I&apos;m a <strong>React Developer</strong>
        </p>
        <button className="btn">Download Resume</button>
      </div>
      {/* img */}
      <div>
        <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-white">
          <img
            className="absolute mx-auto h-52 grayscale-100"
            src={profileImg}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
