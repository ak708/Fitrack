import React from "react";
import "./Food.css";
import FoodNavbar from "./FoodNavbar";
import FoodList from "./FoodList";
function Food() {
  return (
    <div className="FoodMain">
      <div>
        <FoodNavbar />
      </div>
      <div>
        <FoodList />
      </div>
    </div>
  );
}

export default Food;

//<Container triggerText={triggerText} onSubmit={onSubmit} />
