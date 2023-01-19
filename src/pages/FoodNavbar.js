import React from "react";

import { NavLink } from "react-router-dom";

export default function FoodNavbar() {
  return (
    <div>
      <button>
        <NavLink className="nav-link" to="/Food/foodcreate">
          Create Record
        </NavLink>
      </button>
    </div>
  );
}
