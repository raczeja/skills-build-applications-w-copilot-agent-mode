import React, { useEffect, useState } from "react";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    console.log("Fetching from:", endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results || data;
        setActivities(results);
        console.log("Fetched activities:", results);
      })
      .catch((err) => console.error("Error fetching activities:", err));
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map((activity, idx) => (
          <li key={activity.id || idx} className="list-group-item">
            {JSON.stringify(activity)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
