import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Header({ darkMode, onSwitch }) {
  return (
    <div>
      <button onClick={onSwitch}>{darkMode ? " Dark" : "Light"}</button>
      <div>
        <NavLink className="navlinks" to="/" exact>
          Home
        </NavLink>
        <NavLink className="navlinks" to="/WishlistForm">
          Create New Goal
        </NavLink>
        <NavLink className="navlinks" to="/workouts">
          Workout Ideas
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
