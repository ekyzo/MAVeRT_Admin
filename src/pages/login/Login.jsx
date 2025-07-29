import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple dummy login
    if (username === "admin" && password === "admin123") {
      // Inside handleLogin or on successful login
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <div className="branding">
          <FaHeartbeat className="logo-icon" />
          <h1>MAVeRT Admin</h1>
          <p className="subtitle">Secure access for medical administrators</p>
        </div>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <p className="footer">© 2025 MAVeRT HealthTech</p>
      </div>
    </div>
  );
}
