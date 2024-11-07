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


  return (
    <div>
      <h3>Password must contain:</h3>
      <ul className="">
        {Object.keys(passwordStatus).map((key, index) => (
          <li key={index} className={passwordStatus[key] ? "green" : "grey"}>{passwordMessages[key]}</li>)
        )}
      </ul>
    </div>)
}

export default PasswordComplexity;