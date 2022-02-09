import Home from './Home'
import { Route, Switch } from "react-router-dom";
import ToDos from './ToDos';
import Login from './Login';
import NavBar from './NavBar';
import React, { useState } from "react";
import SignUpForm from './SignUp';

function App() {
  const [user, setUser] = useState({})
console.log(user)
  return (
    <div>
    <NavBar />
    <Switch>
      <Route path = "/signup">
      <SignUpForm setUser={setUser}/>
      </Route>
      <Route path="/todos">
        <ToDos />
      </Route>
      <Route path="/login">
        <Login setUser={setUser}/>
      </Route>
      <Route path="/">
        <Home setUser={setUser}/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
