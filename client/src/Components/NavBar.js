//import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "auto",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar({user}) {
  if(user){
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/todos"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        To-dos
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login / Log Out
      </NavLink>
      {/* <NavLink
      to="/signup"
      exact
      style={linkStyles}
      activeStyle={{
          background: "darkblue",
        }}
      >
        Sign Up
      </NavLink> */}
    </div>
  );}else{
    return(
      <div>
        <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login / Log Out
      </NavLink>
      <NavLink
      to="/signup"
      exact
      style={linkStyles}
      activeStyle={{
          background: "darkblue",
        }}
      >
        Sign Up
      </NavLink>
      </div>
    )
  }
}

export default NavBar;