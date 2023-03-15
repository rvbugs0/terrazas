import React from "react";
import { Link } from "react-router-dom";

function ResidentSignUp() {
    // function myFunction() {
    //      alert("Account created successfully! Please login");
    // }
  return (
    <div className="form-container">
      <style>
        {`
            .form-container {
                min-height:81vh;
                padding-top: 24px;
                max-width: 500px;
                margin: 0 auto;
                text-align: center;
                padding: 30px;s
            }
    
            
            input[type="text"],
            input[type="password"] {
                width: 100%;
                padding: 10px;
                margin-bottom: 20px;
    
            }
            `}
      </style>

      <h1 className="text-5xl font-bold white">Create Account </h1>
        <br />
        <div className="divider"></div> 
        <form action="/resident_login">
            <h2 className="white">Sign up to view and book your new home</h2>
            <br/>
            <div>
                <input type="text" required placeholder="FirstName" className="input input-bordered input-info w-full max-w-xs"/>
                <input type="text" required placeholder="LastName" className="input input-bordered input-info w-full max-w-xs"/> 
            </div>
            <div>
                <input type="text" title="Enter a valid 10 digit phone number" pattern="[1-9]{1}[0-9]{9}" required placeholder="Phone No." className="input input-bordered input-info w-full max-w-xs"/>
            </div>
            <br/>
            <div>
                <input type="email" required placeholder="Username/Email ID" className="input input-bordered input-info w-full max-w-xs"/>
            </div>
            <br/>
            <div>
                <input type="password" required minlength="6" maxLength="20" placeholder="Password" className="input input-bordered input-info w-full max-w-xs"/>
                  
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text"></span> 
                  <input type="checkbox" required className="checkbox" />I Agree to all the terms and conditions of Terraazas de Guacuco.
                </label>
              </div>
              <div>
                <button className="btn btn-outline" type="submit">Submit</button>
                {/* <button className="btn btn-outline" type="submit" onClick={myFunction}>Submit</button> */}
            </div>
        </form>
        <br />
    </div>
  );
}

export default ResidentSignUp;
