import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Profile from "../../components/profile/Profile";
import "./AdminProfilePage.scss";

const AdminProfilePage = () => {
  const [admin, setAdmin] = useState({
    name: "John Doe",
    email: "admin@example.com",
    role: "Administrator",
    avatar: "https://i.pravatar.cc/150?img=3",
  });

  return (
    <div className="adminProfilePage">
      <Sidebar />
      <div className="profilePageContainer">
        <Navbar />
        <Profile admin={admin} onSave={setAdmin} />
      </div>
    </div>
  );
};

export default AdminProfilePage;