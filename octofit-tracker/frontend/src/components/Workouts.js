import React, { useEffect, useState } from "react";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    console.log("Fetching from:", endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results || data;
        setWorkouts(results);
        console.log("Fetched workouts:", results);
      })
      .catch((err) => console.error("Error fetching workouts:", err));
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2>Workouts</h2>
      <ul className="list-group">
        {workouts.map((workout, idx) => (
          <li key={workout.id || idx} className="list-group-item">
            {JSON.stringify(workout)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
