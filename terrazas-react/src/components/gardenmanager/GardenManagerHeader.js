import React from "react";
import { Link } from "react-router-dom";

function GardenManagerHeader() {
  return (
    <div className="header">
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Terrazas
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/gardenmanager/manage_resident">Manage Resident</Link>
            </li>
            <li>
              <Link to="/gardenmanager/manage_visitor">Manage Visitor</Link>
            </li>
            <li>
              <Link to="/gardenmanager/chat">Chat</Link>
            </li>
            <li>
              <Link to="/manager_login/garden">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GardenManagerHeader;
