import React from "react";
import { Link } from "react-router-dom";

function ManagerHeader() {
  return (
    <div className="header">
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Terrazas</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/manager/home">Manager Home</Link>
            </li>

            <li>
              <Link to="/manager_login">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ManagerHeader;
