import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="font-roboto min-h-screen bg-slate-100">
      <header className="mx-auto w-11/12 py-8 2xl:container 2xl:w-full">
        <Navbar />
      </header>
      <main className="mx-auto w-11/12 py-8 lg:py-20 2xl:container 2xl:w-full">
        <Main />
      </main>
    </div>
  );
}

export default App;
