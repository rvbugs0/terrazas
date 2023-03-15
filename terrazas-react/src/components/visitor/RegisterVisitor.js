import React from "react";
function myFunction(called) {
  if (called == true) {
    // alert("Registered Successfully!! See you at Terrazas");
  }
}

function RegisterVisitor() {
  return (
    <div>
      <style>
        {`
                
                .form-container {
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
        <h1 className="text-3xl font-bold white">
          Outdoor Guest Registration Form{" "}
        </h1>
        <br />
        <div className="divider"></div>
        <form action="#">
          <h2 className="white">
            By Signing below you agree to the terms and conditions of Guest
            Policy
          </h2>
          <br />
          <div>
            <input
              type="text"
              placeholder="FirstName"
              className="input input-bordered input-info w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="LastName"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>

          <div>
            <lable>Gender:&nbsp;&nbsp;&nbsp;</lable>
            <input
              type="radio"
              name="radio"
              className="radio"
              value="Male"
            />{" "}
            &nbsp;Male
            <input type="radio" name="radio" className="radio" value="Female" />
            &nbsp;Female
            <input type="radio" name="radio" className="radio" value="Other" />
            &nbsp;Other
          </div>
          <br />

          <div>
            <input
              type="text"
              placeholder="Phone No."
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email ID"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <br />

          <div>
            <input
              type="text"
              placeholder="Resident Name"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Apt Number"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>

          <select className="select select-info w-full max-w-xs">
            <option disabled selected>
              Vehicel Make and Model
            </option>
            <option>Hyundai</option>
            <option>Kia</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>BMW</option>
          </select>
          <br />

          <div>
            <br />
            <input
              type="text"
              placeholder="License Plate"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>

          <div>
            <label for="intime">In Time and Date</label>
            <br />
            <input
              id="intime"
              type="datetime-local"
              name="intime"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <br />

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text"></span>
              <input type="checkbox" className="checkbox" />I Agree to all the
              terms and conditions of Terraazas de Guacuco.
            </label>
          </div>

          <div>
            <button
              className="btn btn-outline"
              type="submit"
              onClick={myFunction(true)}
            >
              Submit
            </button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default RegisterVisitor;
