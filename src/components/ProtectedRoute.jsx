// components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn"); // or use context

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
