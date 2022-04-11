import logo from "./logo.svg";
import "./App.css";
import { idHelpers } from "./library/helpers";
import { RandomValue } from "./components/RandomValue";
import { RepositoryLink } from "./components/RepositoryLink";
import { Quiz } from "./components/Quiz";
import { useState } from "react";

function App() {
  const [actionCount, setActionCount] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const id = idHelpers.generateId();
  const handleSubmit = (answers, id) => {
    setQuizAnswer({ answers, id });
  };
  const handleStateChange = () => setActionCount((state) => state + 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Example React App</h1>
        <p>Your unique ID is: {idHelpers.generateId()}</p>
        <RepositoryLink>View Repository</RepositoryLink>
        <RandomValue values={[4, 5, 6]} />
        <p>Your action count is: {actionCount}</p>
        
        {quizAnswer === null && (
          <Quiz id={id} onSubmit={handleSubmit} onStateChange={handleStateChange} />
        )}
        {quizAnswer !== null && <div>{JSON.stringify(quizAnswer)}</div>}
      </header>
    </div>
  );
}

export default App;
