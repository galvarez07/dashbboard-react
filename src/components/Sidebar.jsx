import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartLine, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  return (
    
    <div
      className={`bg-dark text-white vh-100 p-3 ${isSidebarVisible ? "" : "d-none d-lg-block"}`}
      style={{ width: "250px" }}
    >
      <h3 className="text-center mb-4">Dashboard</h3>
      <ul className="list-unstyled">
        <li className="mb-3">
          <Link to="/" className="text-white text-decoration-none" onClick={toggleSidebar}>
            <FaHome className="me-2" />
            Inicio
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/analytics" className="text-white text-decoration-none" onClick={toggleSidebar}>
            <FaChartLine className="me-2" />
            Analytics
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/users" className="text-white text-decoration-none" onClick={toggleSidebar}>
            <FaUsers className="me-2" />
            Usuarios
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/settings" className="text-white text-decoration-none" onClick={toggleSidebar}>
            <FaCog className="me-2" />
            Configuración
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/logout" className="text-white text-decoration-none" onClick={toggleSidebar}>
            <FaSignOutAlt className="me-2" />
            Cerrar Sesión
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;