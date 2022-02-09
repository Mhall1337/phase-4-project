import Home from './Home'
import { Route, Switch } from "react-router-dom";
import ToDos from './ToDos';
import Login from './Login';
import NavBar from './NavBar';


function App() {
  

  return (
    <div>
    <NavBar />
    <Switch>
      <Route path="/todos">
        <ToDos />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
