import "./App.css";
import { Cards, RandomCard } from "./components/Cards";
import { FaAlignJustify } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function App() {
  return (
    <>
      <header className="flex items-center justify-between w-full h-24 p-12 bg-slate-600">
        <p>React introduction project</p>
        <IoLogoJavascript className="w-12 h-12 text-yellow-400" />
        <FaAlignJustify className="w-6 h-6" />
      </header>
      <main className="min-h-screen py-12">
        <Cards />
        {RandomCard}
      </main>
      <footer>Digitale Talenter.</footer>
    </>
  );
}

export default App;
