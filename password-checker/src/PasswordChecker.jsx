import {useState} from "react";
import PasswordComplexity from "./PasswordComplexity";

function PasswordChecker() {

  const [username, setUsername] = useState("#Username123");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);


  function submitForm(e) {
    e.preventDefault();
    console.log(isPasswordValid);
    if (isPasswordValid) {
      alert("Password is valid");
    }
  }

  return (
    <div className="container">
      <h1>Check Password Strength</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="username">Enter username:</label>
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
          <label htmlFor="password">Enter password:</label>
          <input
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"/>
        </div>
        <br/>

        <PasswordComplexity username={username} password={password} setIsPasswordValid={setIsPasswordValid}/>
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