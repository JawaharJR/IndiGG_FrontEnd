import React, { useState } from "react";
import TournamentForm from "./components/TournamentForm";
import TournamentList from "./components/TournamentList";
import ParticipantForm from "./components/ParticipantForm";
import ParticipantList from "./components/ParticipantList";

function App() {
  const [tournaments, setTournaments] = useState([]);
  const [participants, setParticipants] = useState([]);

  const handleTournamentSubmit = (tournament) => {
    setTournaments([...tournaments, { ...tournament, id: Date.now() }]);
  };

  const handleParticipantSubmit = (participant) => {
    setParticipants([...participants, { ...participant, id: Date.now() }]);
  };

  return (
    <div className="App">
      <h1>Tournament System</h1>
      <TournamentForm onSubmit={handleTournamentSubmit} />
      <TournamentList tournaments={tournaments} />
      <ParticipantForm onSubmit={handleParticipantSubmit} />
      <ParticipantList participants={participants} />
    </div>
  );
}

export default App;
