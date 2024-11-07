import {useEffect, useState} from "react";

function PasswordComplexity({username, password}) {
  const [score, setScore] = useState(0);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    checkPassword();
  }, [username, password]);

  function checkPassword() {
    console.log("username", username);
    console.log("password", password);

    const messages = [];

    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[~!@#$%^&*\[\](){}.,|\\:;'"?<>\-_=+\/`]/.test(password);

    if (password.length < 8) {
      messages.push("At least 8 characters");
    }

    if (!hasLowercase) {
      messages.push("At least 1 lowercase letter");
    }

    if (!hasUppercase) {
      messages.push("At least 1 uppercase letter");
    }

    if (!hasNumber) {
      messages.push("At least 1 digit");
    }
    if (!hasSpecial) {
      messages.push("At least 1 special character");
    }

    setErrorMessages(messages);
  }

  return (
    <div>
      {/*<ul>*/}
      {/*  <li>At least 8 characters</li>*/}
      {/*  <li>At least 1 lowercase letter</li>*/}
      {/*  <li>At least 1 uppercase letter</li>*/}
      {/*  <li>At least 1 number</li>*/}
      {/*  <li>At least 1 special character</li>*/}
      {/*</ul>*/}

      <h3>Password must contain:</h3>
      <ul className="error">
        {errorMessages.map((message, index) => (
          <li key={index}>{message}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PasswordComplexity;