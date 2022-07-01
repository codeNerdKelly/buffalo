import "./App.css";
import Weather from "./Weather";
import Github from "./Github";

export default function App() {
  return (
    <div>
    <div className="App">
      <div className = "container">
   
      <Weather defaultCity = "Vienna"/>
    </div>
    </div>
    <Github/>
    </div>
  );
}


