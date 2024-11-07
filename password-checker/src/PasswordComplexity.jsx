import {useEffect, useState} from "react";

function PasswordComplexity({username, password, setIsPasswordValid}) {
  const [passwordStatus, setPasswordStatus] = useState({
    hasMinLength: false,
    hasLowercase: false,
    hasUppercase: false,
    hasNumber: false,
    hasSpecial: false
  })

  const hasLowercaseRgx = /[a-z]/
  const hasUppercaseRgx = /[A-Z]/
  const hasNumberRgx = /\d/
  const hasSpecialRgx = /[~!@#$%^&*\[\](){}.,|\\:;'"?<>\-_=+\/`]/
  const errorMessages = {
    hasMinLength: "At least 8 characters",
    hasLowercase: "At least 1 lowercase letter",
    hasUppercase: "At least 1 uppercase letter",
    hasNumber: "At least 1 digit",
    hasSpecial: "At least 1 special character"
  };

  const [additionalErrorMessages, setAdditionalErrorMessages] = useState("")

  // This can be done on the server side too
  const commonPasswords = [
    "password", "123456", "123456789", "qwerty", "abc123", "letmein", "admin", "welcome", "12345"
  ];

  useEffect(() => {
    setPasswordStatus({
      hasMinLength: password.length >= 8,
      hasLowercase: hasLowercaseRgx.test(password),
      hasUppercase: hasUppercaseRgx.test(password),
      hasNumber: hasNumberRgx.test(password),
      hasSpecial: hasSpecialRgx.test(password)
    })

    let additionalErrorMessages = "";
    if (commonPasswords.includes(password)) {
      additionalErrorMessages = "Password is too common";
    }
    if (username && password && username.toLowerCase() === password.toLowerCase()) {
      additionalErrorMessages = "Password must not be the same as username";
    }

    const isValid = getProgress() === 5 && !additionalErrorMessages;
    setIsPasswordValid(isValid);

    setAdditionalErrorMessages(additionalErrorMessages);
  }, [username, password]);

  function getProgress() {
    return Object.values(passwordStatus).filter(it => it).length;
  }

  function getPasswordStrength() {
    switch (getProgress()) {
      case 5:
        return "Very Strong";
      case 4:
        return "Strong";
      case 3:
        return "Medium";
      case 2:
        return "Weak";
      default:
        return "Very Weak";
    }
  }

  return (
    <div>
      {additionalErrorMessages && <p className="error">{additionalErrorMessages}</p>}
      <p>Password Strength: <span> {getPasswordStrength()}</span></p>
      <meter low={3} optimum={5} max={5} high={4} value={getProgress()}/>

      <p>Password must contain:</p>
      <ul className="">
        {Object.keys(passwordStatus).map((key, index) => (
          <li key={index} className={passwordStatus[key] ? "green" : "grey"}>{errorMessages[key]}</li>)
        )}
      </ul>
    </div>)
}

export default PasswordComplexity;