import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SettingsForm from "../../components/settingsForm/SettingsForm";

const SettingsPage = () => {
  return (
    <div className="settings">
      <Sidebar />
      <div className="settingsContainer">
        <Navbar />

        <div className="contentWrapper">
          <SettingsForm />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
