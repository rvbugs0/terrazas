import React from "react";

function Subscriptions() {
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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{
            flex: 0.3,
            display: "inline-block",
            marginBottom: "10px",
            paddingRight: "64px",
          }}
        >
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Club title</th>
                <th>Joined</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Gym services</td>
                <td>10th Jan. 2023</td>
                <td>
                  <button className="btn btn-outline">Leave</button>
                </td>
              </tr>

              <tr>
                <th>2</th>
                <td>Spa</td>
                <td>15th Jan. 2023</td>
                <td>
                  <button className="btn btn-outline">Leave</button>
                </td>
              </tr>

              <tr>
                <th>3</th>
                <td>Football Club</td>
                <td>15th Jan. 2023</td>
                <td>
                  <button className="btn btn-outline">Leave</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="bg-base-200 shadow-xl"
          style={{ flex: 1, marginLeft: "0px" }}
        >
          <h1 style={{padding:"16px"}} className="text-3xl font-bold white">
            Available Clubs
          </h1>
          <div className="container">
            <div className="box">
              <div className="w-64 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title white">Garden services</h2>
                  <p style={{visibility:"hidden"}}>-</p>
                  <a className="btn btn-primary" href="#">
                    Join
                  </a>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="w-64 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title white">Golf club</h2>
                  <p style={{visibility:"hidden"}}>-</p>
                  <a className="btn btn-primary" href="#">
                    Join
                  </a>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="w-64 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title white">Chess club</h2>
                  <p style={{visibility:"hidden"}}>-</p>
                  <a className="btn btn-primary" href="#">
                    Join
                  </a>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="w-64 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title white">Cycling club</h2>
                  <p style={{visibility:"hidden"}}>-</p>

                  <a className="btn btn-primary" href="#">
                    Join
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
