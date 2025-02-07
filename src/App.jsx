import AboutMe from "./components/main/AboutMe";
import Hero from "./components/main/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="font-roboto relative min-h-screen bg-slate-100">
      <header className="z-20 mx-auto border-b border-slate-200 bg-slate-100 py-8 shadow-sm lg:sticky lg:top-0 2xl:container 2xl:w-full">
        <Navbar />
      </header>
      <main className="mx-auto w-11/12 space-y-10 py-8 md:space-y-12 lg:space-y-20 lg:py-20 2xl:container 2xl:w-full">
        <Hero />
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
