import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MatchDetails = ({ matchId }) => {
  const [matchDetails, setMatchDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatchDetails = async () => {
      try {
        const response = await axios.get(`YOUR_CRICBUZZ_API_ENDPOINT/${matchId}`, {
          headers: {
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
          }
        });
        setMatchDetails(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMatchDetails();
  }, [matchId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching match details.</p>;

  return (
    <div className="container">
      <h2>{matchDetails.name}</h2>
      <p>{matchDetails.venue}</p>
      <h3>Scoreboard</h3>
      {/* Render scoreboard details here */}
    </div>
  );
};

export default MatchDetails;
