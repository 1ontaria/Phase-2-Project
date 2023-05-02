import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Header({ darkMode, onSwitch }) {
  return (
    <div>
      <button onClick={onSwitch}>{darkMode ? " Dark" : "Light"}</button>
      <NavLink exact to="/">
        Home
      </NavLink>

      <NavLink to="/WishlistForm">Create New Goal</NavLink>
    </div>
  );
}

export default Header;
