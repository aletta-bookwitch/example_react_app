import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Example React App
        </h1>
        <a
          className="App-link"
          href="https://github.com/aletta-bookwitch/example_react_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </header>
    </div>
  );
}

export default App;
