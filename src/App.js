import "./App.css";
import Github from "./Github";
import Search from "./Search"
import Forecast from "./Forecast";

export default function App() {
  return (
    <div>
    <div className="App">
      <div className = "container">
    <Search />
    <Forecast /> 
    </div>
    </div>
    <Github/>
    </div>
  );
}


