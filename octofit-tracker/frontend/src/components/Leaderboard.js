import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    console.log("Fetching from:", endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results || data;
        setLeaders(results);
        console.log("Fetched leaderboard:", results);
      })
      .catch((err) => console.error("Error fetching leaderboard:", err));
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2>Leaderboard</h2>
      <ul className="list-group">
        {leaders.map((leader, idx) => (
          <li key={leader.id || idx} className="list-group-item">
            {JSON.stringify(leader)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
