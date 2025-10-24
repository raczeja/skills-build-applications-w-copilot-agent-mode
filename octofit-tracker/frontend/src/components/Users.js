import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    console.log("Fetching from:", endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results || data;
        setUsers(results);
        console.log("Fetched users:", results);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <ul className="list-group">
        {users.map((user, idx) => (
          <li key={user.id || idx} className="list-group-item">
            {JSON.stringify(user)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
