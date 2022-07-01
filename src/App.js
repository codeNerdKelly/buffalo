import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Github from "./Github";

export default function App() {
  return (
    <div>
    <div className="App">
      <div className = "container">
      <Search />
      <Weather />
    </div>
    </div>
    <Github/>
    </div>
  );
}


