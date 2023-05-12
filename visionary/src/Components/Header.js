import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/new">Create New Goal</Link>
      <Link to="/test"> Test</Link>
    </div>
  );
}

export default Header;
