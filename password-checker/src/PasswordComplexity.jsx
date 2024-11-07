import {useEffect, useState} from "react";

function PasswordComplexity({username, password}) {
  const [errorMessages, setErrorMessages] = useState([]);
  const [passwordInfo, setPasswordInfo] = useState({
    score: 0,
    errorMessages: []
  });

  useEffect(() => {
    checkPassword();
  }, [username, password]);

  function checkPassword() {
    const messages = [];
    let score = 0;

    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[~!@#$%^&*\[\](){}.,|\\:;'"?<>\-_=+\/`]/.test(password);

    if (password.length < 8) {
      messages.push("At least 8 characters");
    } else {
      score += 1;
    }

    if (!hasLowercase) {
      messages.push("At least 1 lowercase letter");
    } else {
      score += 1;
    }

    if (!hasUppercase) {
      messages.push("At least 1 uppercase letter");
    } else {
      score += 1;
    }

    if (!hasNumber) {
      messages.push("At least 1 digit");
    } else {
      score += 1;
    }

    if (!hasSpecial) {
      messages.push("At least 1 special character");
    } else {
      score += 1;
    }

    console.log("score", score);

    setPasswordInfo({
      score: score,
      errorMessages: messages
    })

    setErrorMessages(messages);
  }

  function getPasswordStrength() {
    if (passwordInfo.score < 2) {
      return "Weak";
    } else if (passwordInfo.score === 2) {
      return "Moderate";
    } else if (passwordInfo.score === 3) {
      return "Strong";
    } else if (passwordInfo.score === 4) {
      return "Excellent";
    }
  }

  return (<div>
      {/*<ul>*/}
      {/*  <li>At least 8 characters</li>*/}
      {/*  <li>At least 1 lowercase letter</li>*/}
      {/*  <li>At least 1 uppercase letter</li>*/}
      {/*  <li>At least 1 number</li>*/}
      {/*  <li>At least 1 special character</li>*/}
      {/*</ul>*/}

      <h3>Password must contain:</h3>
      <ul className="error">
        {errorMessages.map((message, index) => (<li key={index}>{message}
          </li>))}
      </ul>
    </div>)
}

export default PasswordComplexity;