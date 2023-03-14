import React from "react";
import { Link } from "react-router-dom";

function ResidentHeader() {
  return (
    <div className="header">
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Terrazas</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="profile">Home</a>
            </li>

            <li>
              <a href="../resident_login">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResidentHeader;
