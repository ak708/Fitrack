import React from "react";
import "./NavbarElements.css";
import HomeIcon from "@mui/icons-material/Home";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { NavLink, Link, Nav, NavMenu } from "react-router-dom";
function NavbarElements() {
  return (
    <nav className="mainnav">
      <ul>
        <Link to="/Home">
          <li className="homepage">
            <div class="home-icon">
              <HomeIcon className="homeIcon" />
            </div>
          </li>
        </Link>
        <Link to="/Workout">
          <li className="workoutpage">
            <div class="workout-icon">
              <FitnessCenterIcon className="fitnesscenterIcon" />
            </div>
          </li>
        </Link>
        <Link to="/Analytics">
          <li className="analyticspage">
            <AnalyticsIcon className="analyticsIcon" />
          </li>
        </Link>
        <Link to="/Food">
          <li className="foodpage">
            <RestaurantIcon className="restaurantIcon" />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavbarElements;
