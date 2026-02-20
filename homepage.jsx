import React from "react";
import "./homepage.css";
import { FaUserCircle, FaFolderOpen, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="glass-card">

        {/* Sidebar */}
        <div className="sidebar">
          <div className="profile">
            <FaUserCircle size={70} />
            <p>User</p>
          </div>

          <div className="menu">
            <button className="active">Home</button>
            <button>Vault</button>
            <button>Settings</button>
          </div>

          <div className="logout">
            <button>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        {/* Main Dashboard */}
        <div className="dashboard">
          <h2>Welcome User 👋</h2>

          <div className="search-bar">
            <input type="text" placeholder="Search files..." />
          </div>

          <div className="quick-actions">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>

          <div className="vault-section">
            <h3>Vault</h3>
            <button className="add-btn">+ Add Personal Info</button>
          </div>
        </div>

      </div>
    </div>
  );
}
