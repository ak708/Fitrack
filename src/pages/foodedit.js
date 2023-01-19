import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function FoodEdit() {
  const [form, setForm] = useState({
    name: "",
    weight: "",
    cals: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/food/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/Food");
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
    const editedFood = {
      name: form.name,
      weight: form.weight,
      cals: form.cals,
    };
    console.log(editedFood);
    await fetch(`http://localhost:5000/update/${params.id.toString()}`, {
      method: "POST",
      body: JSON.stringify(editedFood),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/Food");
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
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            className="form-control"
            id="weight"
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
        <br />
        <div className="form-group">
          <input
            type="submit"
            value="Update Food"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
