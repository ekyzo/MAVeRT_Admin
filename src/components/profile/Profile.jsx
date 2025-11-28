// src/components/profile/Profile.jsx
import React, { useState } from "react";
import "./Profile.scss";

const Profile = ({ admin, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(admin);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setEditing(false);
  };

  return (
    <div className="profile-card">
      <img src={admin.avatar} alt="avatar" className="avatar" />
      {!editing ? (
        <>
          <h2>{admin.name}</h2>
          <p>{admin.email}</p>
          <p>{admin.role}</p>
          <button className="edit-btn" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        </>
      ) : (
        <form className="edit-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
          </label>
          <div className="form-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
