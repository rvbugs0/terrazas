import React from "react";
import { Link } from "react-router-dom";


const PoolManagerLogin = () => {
    return (
      <div>
        <style>
          {`
              .form-container {
                  min-height:81vh;
                  padding-top: 24px;
                  max-width: 500px;
                  margin: 0 auto;
                  text-align: center;
                  padding: 30px;
              }
      
              input[type="text"],
              input[type="password"] {
                  width: 100%;
                  padding: 10px;
                  margin-bottom: 20px;
      
              }
              `}
        </style>
        <div className="form-container">
          <h1 className="text-5xl font-bold white">Pool Manager</h1>
          <br />
          <form action="/poolmanager/home">
            <h2 className="white">Login to manage your Terrazas</h2>
            <br />
            <div>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered input-info w-full max-w-xs"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered input-info w-full max-w-xs"
              />
            </div>
            <div>
              <button className="btn btn-outline" type="submit">
                Login
              </button>
            </div>
          </form>
          <br />
          <Link to="/forgot_password" className="link link-hover link-info">
            Forgot Password?
          </Link>
        </div>
      </div>
    );
  };
  

export default PoolManagerLogin;