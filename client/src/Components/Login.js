import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login({setUser, user}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  function handleLogout(){
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then(r => {
      if(r.ok){
        return r.json().then(user =>  {
          setUser(user)
          setUsername("")
          setPassword("")
          history.push("/")
      })}
      else{
        alert("Unauthorized credentials")
    }})
    
   
  }
  if(!user){
  return (
  <div>
      <h3>Log In</h3>
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <label>Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <input type="submit"></input>
    </form>
    <br></br>
    <div>Not A Current User?<button onClick={()=>history.push("/signup")}>Sign Up!</button></div>
  </div>
  )}
  else{
    return <button onClick={handleLogout} className="logout">Log Out</button>
  }
}
export default Login