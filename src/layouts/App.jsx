import Contact from "../components/main/Contact";
import Navbar from "../components/navbar/Navbar";
import Main from "../components/main/Main";

function App() {
  return (
    <div className="font-roboto relative min-h-screen bg-slate-100">
      <header className="sticky top-0 z-20 mx-auto min-h-full border-b border-slate-200 bg-slate-100 py-8 shadow-sm lg:top-0 lg:h-auto 2xl:container 2xl:w-full">
        <Navbar />
      </header>
      <main className="mx-auto w-11/12 2xl:container 2xl:w-full">
        <Main />
      </main>
      <div className="bg-black text-white">
        <Contact />
      </div>
    </div>
  );
}

export default App;
