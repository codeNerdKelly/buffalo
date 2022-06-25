import "./App.css";
import Search from "./Search";
import Description from "./Description";
import Weather from "./Weather";
import Github from "./Github";

export default function App() {
  return (
    <div>
    <div className="App">
      <Search />
      <h1 className="City">New York</h1>
      <Description />
      <Weather />
    </div>
    <Github/>
    </div>
  );
}


