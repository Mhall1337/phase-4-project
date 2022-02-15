import Home from './Home'
import { Route, Switch } from "react-router-dom";
import ToDos from './ToDos';
import Login from './Login';
import NavBar from './NavBar';
import React, { useState, useEffect } from "react";
import SignUpForm from './SignUp';


function App() {

  const [user, setUser] = useState(null)
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user)).catch(error => console.log(error));
      }
    });
  }, []);

  if (!user) {
    return (
      <div>
        <NavBar />
        <Switch >
          <Route path="/login">
            <Login setUser={setUser} user={user} />
          </Route>
          <Route path="/signup">
            <SignUpForm setUser={setUser} />
          </Route>
        </Switch>
      </div>
    )
  }
  else {
    return (
      <div>
        <NavBar user={user}/>
        <Switch>
          <Route path="/todos">
            <ToDos user={user}/>
          </Route>
          <Route path="/login">
            <Login setUser={setUser} user={user} />
          </Route>
          <Route path="/">
            <Home setUser={setUser} user={user}/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
