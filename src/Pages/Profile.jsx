import React from "react";
import { useNavigate } from "react-router-dom";

export const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();

   const handleLogout = () => {
    setUser(null);
    navigate("/home");
  };

  return (
    <div className="p-4 shadow bg-light rounded text-center">
     <h2>Welcome, {user.firstName} {user.lastName}</h2>
<p><strong>Username:</strong> {user.username}</p>

      <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
