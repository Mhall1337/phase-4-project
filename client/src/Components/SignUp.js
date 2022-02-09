import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUpForm({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const history = useHistory()
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation
      }),
    }).then(r => r.json())
    .then(user =>  {
        setUser(user)
        setUsername("")
        setPassword("")
        setPasswordConfirmation("")
        history.push("/")
    })
   
  }

  return (
  <div>
      <h3>Sign Up</h3>
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <label>Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <label>Confirm Password</label>
      <input type="password" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
      <input type="submit"></input>
    </form>
  </div>
  );
}

export default SignUpForm;