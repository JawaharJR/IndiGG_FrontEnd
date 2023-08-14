import React, { useState } from "react";
import "./TournamentForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TournamentForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !startDate || !endDate || !status) {
      setErrorMessage("All fields are required");
      return;
    }

    setErrorMessage("");

    onSubmit({ name, startDate, endDate, status });
    setName("");
    setStartDate("");
    setEndDate("");
    setStatus("");
  };

  return (
    <div className="tournament-form-container">
      <h2>Create Tournament</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control tournament-form-input"
            placeholder="Tournament Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control tournament-form-input"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control tournament-form-input"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control tournament-form-input"
            placeholder="Tournament Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary tournament-form-submit"
        >
          Create Tournament
        </button>
        {errorMessage && (
          <div className="tournament-form-error">{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default TournamentForm;
