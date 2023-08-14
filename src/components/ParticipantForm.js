import React, { useState } from "react";
import "./ParticipantForm.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const ParticipantForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [tournamentId, setTournamentId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !tournamentId) {
      setErrorMessage("All fields are required");
      return;
    }

    setErrorMessage("");

    onSubmit({ name, tournamentId });
    setName("");
    setTournamentId("");
  };

  return (
    <div className="participant-form-container">
      <h2>Add Participant</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control participant-form-input"
            placeholder="Participant Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control participant-form-input"
            placeholder="Tournament ID"
            value={tournamentId}
            onChange={(e) => setTournamentId(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary participant-form-submit"
        >
          Add Participant
        </button>
        {errorMessage && (
          <div className="participant-form-error">{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default ParticipantForm;
