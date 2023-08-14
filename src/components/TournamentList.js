import React from "react";
import "./TournamentList.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TournamentList = ({ tournaments, onDelete }) => {
  return (
    <div className="tournament-list-container">
      <h2>Tournaments</h2>
      <ul className="list-unstyled">
        {tournaments.map((tournament) => (
          <li className="tournament-item" key={tournament.id}>
            <div>
              <h3>{tournament.name}</h3>
              <p>Start Date: {tournament.startDate}</p>
              <p>End Date: {tournament.endDate}</p>
              <p className="tournament-status">Status: {tournament.status}</p>
            </div>
            <button
              className="delete-button"
              onClick={() => onDelete(tournament.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentList;
