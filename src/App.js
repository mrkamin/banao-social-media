import "./App.css";
import Hero from "./components/Hero";
import Popup from "./components/Popup";
import HeroNav from "./components/HeroNav";

function App() {
  return (
    <div className="App position-relative">
      <Popup />
      <Hero />
      <HeroNav />
    </div>
  );
}

export default App;
