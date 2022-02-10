import Home from './Home'
import { Route, Switch } from "react-router-dom";
import ToDos from './ToDos';
import Login from './Login';
import NavBar from './NavBar';
import React, { useState } from "react";
import SignUpForm from './SignUp';


function App() {

  const [user, setUser] = useState(null)

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
