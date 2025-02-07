import { Outlet } from "react-router-dom";
import Contact from "./components/main/Contact";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="font-roboto relative min-h-screen bg-slate-100">
      <header className="z-20 mx-auto border-b border-slate-200 bg-slate-100 py-8 shadow-sm lg:sticky lg:top-0 2xl:container 2xl:w-full">
        <Navbar />
      </header>
      <main className="mx-auto w-11/12 2xl:container 2xl:w-full">
        <Outlet />
        <Contact />
      </main>
    </div>
  );
}

export default App;
