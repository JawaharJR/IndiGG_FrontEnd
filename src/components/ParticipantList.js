import React from "react";
import "./ParticipantList.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const ParticipantList = ({ participants, onDelete }) => {
  return (
    <div className="participant-list-container">
      <h2>Participants</h2>
      <ul className="list-unstyled">
        {participants.map((participant) => (
          <li className="participant-item" key={participant.id}>
            <div>
              <h3>{participant.name}</h3>
              <p>Tournament ID: {participant.tournament}</p>
            </div>
            <button
              className="btn btn-danger delete-button"
              onClick={() => onDelete(participant.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantList;
