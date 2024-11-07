import {useState} from "react";

function PasswordChecker() {

  const [username, setUsername] = useState("#Username123");
  const [password, setPassword] = useState("");

  const [score, setScore] = useState(0);
  const [error, setError] = useState([]);

  function checkPassword(e) {
    e.preventDefault();
    setScore(0);

    console.log('Checking password...', username, password);

    const messages = [];

    if (password.length === 0) {
      messages.push("Password cannot be empty");
    }
    if (password.length < 8) {
      messages.push("Password must be at least 8 characters long");
    }
    if (!password.match(/[a-z]/)) {
      messages.push("Password must contain at least one lowercase letter");
    }
    if (!password.match(/[A-Z]/)) {
      messages.push("Password must contain at least one uppercase letter");
    }
    if (!password.match(/[0-9]/)) {
      messages.push("Password must contain at least one digit");
    }
    if (!password.match(/[~!@#$%^&*\[\](){}.,|\\:;'"?<>\-_=+`]/)) {
      messages.push("Password must contain at least one special character");
    }

    setError(messages);
  }

  return (
    <div className="container">
      <h1>
        Check Password Strength
      </h1>
      <form onSubmit={checkPassword}>
        <div>
          <label htmlFor="username">
            Enter username:
          </label>
          <br/>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"/>
        </div>
        <br/>

        <div>
          <label htmlFor="password">
            Enter password:
          </label>
          <br/>
          <input
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"/>
        </div>
        <p className="error">
          {error.map((message, index) => (
            <span key={index}>
              {message}
              <br/>
            </span>
          ))}

        </p>

        <button
          // disabled={!password}
          type="submit">
          Check password
        </button>
      </form>
    </div>
  )
}

export default PasswordChecker;