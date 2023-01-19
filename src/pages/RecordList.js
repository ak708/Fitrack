import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RecordList.css";
const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.sets}</td>
    <td>{props.record.reps}</td>
    <td>{props.record.weights}</td>
    <td>
      <Link className="btn btn-link" to={`/Workout/edit/${props.record._id}`}>
        Edit
      </Link>
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
      console.log(records);
    }

    getRecords();

    return;
  }, [records.length]);

  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
    console.log(newRecords);
  }

  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Record List</h3>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th> Name </th>
              <th> Sets </th>
              <th> Reps </th>
              <th> Weights </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>{recordList()}</tbody>
        </table>
      </div>
    </div>
  );
}
