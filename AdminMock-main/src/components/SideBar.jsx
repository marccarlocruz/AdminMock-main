import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HouseDoor, FileEarmarkText, ShieldCheck, People, Book } from "react-bootstrap-icons";
import { FiLogOut, FiSettings } from "react-icons/fi";
import "../css/Sidebar.css";

const SideBar = () => {
  const [userManagementDropdownVisible, setUserManagementDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setUserManagementDropdownVisible(!userManagementDropdownVisible);
  };

  const closeDropdown = () => {
    setUserManagementDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="bg-light sidebar">
        <div className="sidebar-sticky">
          <div className="logo-title-container">
            <a className="" href="#">
              <img
                className="admin-logo"
                src="src/assets/TsukidenLogo.png"
                alt="Logo"
              />
            </a>
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#" onClick={closeDropdown}>
                <HouseDoor className="housedoor" size={20} /> Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={closeDropdown}>
                <FileEarmarkText className="fileearmark" size={20} /> Certificate Management
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={closeDropdown}>
                <ShieldCheck className="shieldcheck" size={20} /> Verification
              </a>
            </li>

            {/* User Management Dropdown */}
            <li className={`nav-item dropdown ${userManagementDropdownVisible ? "show" : ""}`} ref={dropdownRef}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userManagementDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={userManagementDropdownVisible}
                onClick={toggleDropdown}
              >
                <People className="people" size={20} /> User Management
              </a>
              <div className={`dropdown-menu ${userManagementDropdownVisible ? "show" : ""}`} aria-labelledby="userManagementDropdown">
                <a className="dropdown-item" href="#">
                  Student
                </a>
                <a className="dropdown-item" href="#">
                  Instructor
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" onClick={closeDropdown}>
                <Book className="book" size={20} /> Course Management
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#" onClick={closeDropdown}>
                <FiSettings className="fi-settings" size={20} /> Settings
              </a>
            </li>

            <div className="admin-profile-container">
              <a className="profile-settings" href="#">
                <img
                  className="admin-profile"
                  src="src/assets/SatoruGojo.jpg"
                  alt="Profile"
                />
                <p className="admin-name">Caloy Skie</p>
              </a>
              <p className="admin-position">Administrator</p>
            </div>

            <li className="nav-item-logout">
              <a className="nav-link active" href="#">
                <FiLogOut className="fi-log-out" size={15} /> Log Out
              </a>
            </li>

            {/* Add more sidebar items as needed */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
