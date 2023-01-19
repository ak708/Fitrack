import React from "react";
import "./Workout.css";
import Navbar from "./Navbar";
import RecordList from "./RecordList";
function Workout() {
  return (
    <div className="WorkoutMain">
      <div className="NavbarContainer">
        <Navbar />
      </div>
      <div>
        <RecordList />
      </div>
    </div>
  );
}

export default Workout;

//<Container triggerText={triggerText} onSubmit={onSubmit} />
