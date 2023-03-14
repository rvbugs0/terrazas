import React from "react";

function RegisterVehicle() {
  return (
    <div className="profile-container">
      <style type="text/css">
        {`
            .profile-container {
                padding: 24px;
                margin: 24px;
                min-height:90vh;
            }
    
            .container {
                display: flex;
                flex-wrap: wrap;
            }
    
            .box {
                display: inline-block;
                margin: 10px;
            }
            `}
      </style>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        <div
          style={{
            flex: 0.3,
            display: "inline-block",
            marginBottom: "10px",
            paddingRight: "64px",
          }}
        >
          <div className="card bg-base-300 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={require("../../static/images/avatar.jpg")} />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title white">John Doe</h2>
              <p>Resident - Apartment owner #14</p>
              <br />

            </div>
          </div>
        </div>

        <div
          className="bg-base-200 shadow-xl"
          style={{flex:1,marginLeft:"0px"}}
        >
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Vehicle Plate</th>
                  <th>Make & model</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>ABC-1234</td>
                  <td>Ford Mustang - 2010</td>
                  <td>TEXAS</td>
                </tr>

                <tr>
                  <th>2</th>
                  <td>DEF-1234</td>
                  <td>Chevrolet Cruze - 2020</td>
                  <td>MARYLAND</td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>GHI-1234</td>
                  <td>GMC Supercharger - 2015</td>
                  <td>NEWYORK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterVehicle;
