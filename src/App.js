import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [confirmPasswordValidated, setConfirmPasswordValidated] =
    useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (emailValidated && passwordValidated && confirmPasswordValidated) {
      alert("form submitted successfully");
    } else {
      alert("can’t submit the form");
    }

    setEmail("");
    setPassword("");
    setCpassword("");
  }
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setEmailValidated(validateEmail(inputEmail));
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setPasswordValidated(inputPassword.length >= 8);
  };
  const handleConfirmPass = (e) => {
    const confirmPass = e.target.value;
    setCpassword(confirmPass);
    setConfirmPasswordValidated(confirmPass === password);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  return (
    <div className="app">
      <form action="">
        <label htmlFor="">Email:</label> <br />
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          style={{
            border: emailValidated ? "2px solid green" : "2px solid red",
          }}
        />
        <br />
        {!email && <small>Invalid email format</small>}
        <br />
        <label htmlFor="">Password:</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{
            border: passwordValidated ? "2px solid green" : "2px solid red",
          }}
        />{" "}
        <br />
        {!passwordValidated && (
          <small>Password must be at least 8 characters</small>
        )}
        <br />
        <label htmlFor="">Confirm Password:</label>
        <br />
        <input
          type="password"
          value={cpassword}
          onChange={handleConfirmPass}
          style={{
            border: confirmPasswordValidated
              ? "2px solid green"
              : "2px solid red",
          }}
        />
        <br />
        {!confirmPasswordValidated && <small>Passwords do not match</small>}
        <br />
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
