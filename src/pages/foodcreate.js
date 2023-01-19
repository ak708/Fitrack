import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function FoodCreate() {
  const [form, setForm] = useState({
    name: "",
    weight: "",
    cals: "",
  });
  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmitFood(e) {
    e.preventDefault();

    const newFood = { ...form };

    await fetch("http://localhost:5000/food/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFood),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    console.log(form);
    setForm({ name: "", cals: "", weight: "" });
    navigate("/Food");
  }

  return (
    <div>
      <h3>Add Food</h3>
      <form onSubmit={onSubmitFood}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            className="form-control"
            id="sets"
            value={form.weight}
            onChange={(e) => updateForm({ weight: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cals">Calories</label>
          <input
            type="text"
            className="form-control"
            id="cals"
            value={form.cals}
            onChange={(e) => updateForm({ cals: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Add Food" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
