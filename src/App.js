import logo from "./logo.svg";
import "./App.css";
import { idHelpers } from "./library/helpers/index";
import RepositoryLink from "./components/RepositoryLink";
import RandomValue from "./components/RandomValue";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Example React App</h1>

        <p>Your unique ID is: {idHelpers.generateId()}</p>
        <p><RepositoryLink /></p>
        <p><RandomValue /></p>
      </header>
    </div>
  );
}

export default App;
