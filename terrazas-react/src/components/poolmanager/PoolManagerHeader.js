import React from "react";
import { Link } from "react-router-dom";

function PoolManagerHeader() {
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
              <Link to="/poolmanager/manage_resident">Manage Resident</Link>
            </li>
            <li>
              <Link to="/poolmanager/manage_visitor">Manage Visitor</Link>
            </li>
            <li>
              <Link to="/poolmanager/chat">Chat</Link>
            </li>
            <li>
              <Link to="/manager_login/pool">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PoolManagerHeader;
