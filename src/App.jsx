import ButtonAdd from "./components/ButtonAdd";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="w-screen h-screen p-4">
      <h3 className="font-bold text-3xl text-slate-800 text-center mb-6">
        Todo App v.1.0
      </h3>
      <Hero />
      <div>
        <ButtonAdd />
      </div>
    </div>
  );
}

export default App;
