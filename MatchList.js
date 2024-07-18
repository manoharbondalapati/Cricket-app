import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MatchList = ({ onSelectMatch }) => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('YOUR_CRICBUZZ_API_ENDPOINT', {
          headers: {
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
          }
        });
        setMatches(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching matches.</p>;

  return (
    <div className="container">
      <div className="row">
        {matches.map(match => (
          <div key={match.id} className="col-md-4 mb-4">
            <div className="card" onClick={() => onSelectMatch(match.id)}>
              <div className="card-body">
                <h5 className="card-title">{match.name}</h5>
                <p className="card-text">{match.venue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchList;
