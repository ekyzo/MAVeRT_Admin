import "./settingsForm.scss";
import { useState } from "react";

const SettingsForm = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="settingsForm">
      {/* Account Settings */}
      <div className="section">
        <h2>Account Settings</h2>

        <div className="formGroup">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>

        <div className="formGroup">
          <label>Email Address</label>
          <input type="email" placeholder="john@email.com" />
        </div>

        <div className="formGroup">
          <label>Phone Number</label>
          <input type="text" placeholder="+60123456789" />
        </div>

        <div className="formGroup">
          <label>Change Password</label>
          <input type="password" placeholder="New Password" />
        </div>
      </div>

      {/* Preferences */}
      <div className="section">
        <h2>Preferences</h2>

        <div className="toggleGroup">
          <label>Dark Mode</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <div className="toggleGroup">
          <label>Email Notifications</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <div className="formGroup">
          <label>Language</label>
          <select>
            <option>English</option>
            <option>Malay</option>
            <option>Chinese</option>
          </select>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="section danger">
        <h2>Danger Zone</h2>

        <button className="deleteBtn">Delete Account</button>
        <button className="resetBtn">Reset All Settings</button>
      </div>

      <button className="saveBtn">Save Changes</button>
    </div>
  );
};

export default SettingsForm;
