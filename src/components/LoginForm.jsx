import { useState } from "react";

export function LoginForm () {
  const [state, setState] = useState({});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="">
        Name:
        <input type="text" id="name" name="name" />
      </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" />
        </label>
      </div>
      <div>
        <button type="submit">Sign in</button>
      </div>
    </form>
  )
}