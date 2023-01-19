import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    sets: "",
    reps: "",
    weights: "",
  });
  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newWorkout = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWorkout),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    console.log(form);
    setForm({ name: "", sets: "", reps: "", weights: "" });
    navigate("/Workout");
  }

  return (
    <div>
      <h3>Create New Record</h3>
      <form onSubmit={onSubmit}>
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
          <label htmlFor="sets">Sets</label>
          <input
            type="text"
            className="form-control"
            id="sets"
            value={form.sets}
            onChange={(e) => updateForm({ sets: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reps">Reps</label>
          <input
            type="text"
            className="form-control"
            id="reps"
            value={form.reps}
            onChange={(e) => updateForm({ reps: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weights">Weights</label>
          <input
            type="text"
            className="form-control"
            id="weights"
            value={form.weights}
            onChange={(e) => updateForm({ weights: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Add Workout"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
