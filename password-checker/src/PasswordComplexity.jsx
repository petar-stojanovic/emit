import {useEffect, useState} from "react";

function PasswordComplexity({username, password}) {
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
  const passwordMessages = {
    hasMinLength: "At least 8 characters",
    hasLowercase: "At least 1 lowercase letter",
    hasUppercase: "At least 1 uppercase letter",
    hasNumber: "At least 1 digit",
    hasSpecial: "At least 1 special character"
  };

  useEffect(() => {
    setPasswordStatus({
      hasMinLength: password.length >= 8,
      hasLowercase: hasLowercaseRgx.test(password),
      hasUppercase: hasUppercaseRgx.test(password),
      hasNumber: hasNumberRgx.test(password),
      hasSpecial: hasSpecialRgx.test(password)
    })
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
      <p>Password Strength: <span> {getPasswordStrength()}</span></p>
      <meter low={3} optimum={5} max={5} high={4} value={getProgress()}/>

      <p>Password must contain:</p>
      <ul className="">
        {Object.keys(passwordStatus).map((key, index) => (
          <li key={index} className={passwordStatus[key] ? "green" : "grey"}>{passwordMessages[key]}</li>)
        )}
      </ul>
    </div>)
}

export default PasswordComplexity;