import React, { useState } from 'react';
import MatchList from './Components/MatchList';
import MatchDetails from './Components/MatchDetails';

const App = () => {
  const [selectedMatchId, setSelectedMatchId] = useState(null);

  return (
    <div>
      <h1 className="text-center my-4">Cricket Matches</h1>
      {selectedMatchId ? (
        <MatchDetails matchId={selectedMatchId} />
      ) : (
        <MatchList onSelectMatch={setSelectedMatchId} />
      )}
    </div>
  );
};

export default App;
