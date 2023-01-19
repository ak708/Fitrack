import React from "react";
import NavbarElements from "./components/Navbar/NavbarElements";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Create from "./pages/create";
import Workout from "./pages/Workout";
import Analytics from "./pages/Analytics";
import FoodCreate from "./pages/foodcreate";
import FoodEdit from "./pages/foodedit";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Edit from "./pages/edit";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="parent">
        <Router>
          <NavbarElements />
          <div className="children">
            <Routes>
              <Route path="/Home" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/Food" element={<Food />} />
            </Routes>
            <Routes>
              <Route path="/Workout" element={<Workout />} />
            </Routes>
            <Routes>
              <Route path="/Workout/create" element={<Create />} />
            </Routes>
            <Routes>
              <Route path="/Workout/edit/:id" element={<Edit />} />
            </Routes>
            <Routes>
              <Route path="/Food/foodcreate" element={<FoodCreate />} />
            </Routes>
            <Routes>
              <Route path="/Food/foodedit/:id" element={<FoodEdit />} />
            </Routes>
            <Routes>
              <Route path="/Analytics" element={<Analytics />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
