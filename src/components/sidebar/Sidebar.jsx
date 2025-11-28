import "./sidebar.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">MAVeRT Admin</span>
        </Link>
      </div>
      <hr></hr>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li>
              <DashboardOutlinedIcon />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Person2OutlinedIcon />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/exercises" style={{ textDecoration: "none" }}>
            <li>
              <FitnessCenterOutlinedIcon />
              <span>Exercises</span>
            </li>
          </Link>
          <li>
            <ListAltOutlinedIcon />
            <span>Others</span>
          </li>

          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon />
            <span>Profile</span>
          </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
          <li>
            <SettingsOutlinedIcon />
            <span>Settings</span>
          </li>
          </Link>
          <li>
            <LogoutOutlinedIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
