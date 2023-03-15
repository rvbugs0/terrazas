import React from "react";

function PMManageVisitor() {
  return (
    <div className="profile-container">
      <style type="text/css">
        {`
.form-container {
  padding-top: 24px;
  min-height:100vh;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
}

.hdng {
  font-size: 30px;
  padding-bottom: 10px;
}
              `}
      </style>

      <div className="form-container">
        <div>
          <h1 className="hdng">Manage Visitor</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Visitor Car No</th>
                <th>join Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover">
                <th>1</th>
                <td>Robert</td>
                <td>7FYD247</td>
                <td>01/20/2023</td>
                <td>
                  <button className="btn btn-error">Cancel Membership</button>
                </td>
              </tr>

              <tr className="hover">
                <th>2</th>
                <td>Scarlett</td>
                <td>AVM N55</td>
                <td>12/22/2022</td>
                <td>
                  <button className="btn btn-error">Cancel Membership</button>
                </td>
              </tr>

              <tr className="hover">
                <th>3</th>
                <td>Marry</td>
                <td>79666</td>
                <td>09/14/2022</td>
                <td>
                  <button className="btn btn-error">Cancel Membership</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PMManageVisitor;
