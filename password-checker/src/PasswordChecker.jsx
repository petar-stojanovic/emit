import {useState} from "react";

function PasswordChecker() {

  const [password, setPassword] = useState("");

  function checkPassword(e) {
    e.preventDefault();
    console.log('Checking password...', password);
  }

  return (
    <div className="container">
      <h1>
        Check Password Strength
      </h1>
      <form onSubmit={checkPassword}>
        <label htmlFor="password">
          Enter password:
        </label>
        <br/>
        <input
          type="text"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"/>

        <button type="submit">
          Check password
        </button>
      </form>
    </div>
  )
}

export default PasswordChecker;