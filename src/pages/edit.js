import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    sets: "",
    reps: "",
    weights: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/record/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/Workout");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault(e);
    console.log(form.name);
    const editedWorkout = {
      name: form.name,
      sets: form.sets,
      reps: form.reps,
      weights: form.weights,
    };
    console.log(editedWorkout);
    await fetch(`http://localhost:5000/record/update/${params.id.toString()}`, {
      method: "POST",
      body: JSON.stringify(editedWorkout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/Workout");
  }

  return (
    <div>
      <h3>Update Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
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
        <br />
        <div className="form-group">
          <input
            type="submit"
            value="Edit Workout"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
