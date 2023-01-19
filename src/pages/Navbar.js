import React from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <button>
        <NavLink className="nav-links" to="/Workout/create">
          Create Record
        </NavLink>
      </button>
    </div>
  );
}
