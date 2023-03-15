import React from "react";

function SMManageResident() {
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
        <div >
        <h1 className="hdng">Manage Resident</h1>
      </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Apartment</th>
                <th>Access</th>
              </tr>
            </thead>
            <tbody>
              
              <tr className="hover">
                <th>1</th>
                <td>Robert</td>
                <td>301</td>
                <td>
                  <button className="btn btn-error">Granted</button>
                </td>
              </tr>
              
              <tr className="hover">
                <th>2</th>
                <td>Scarlett</td>
                <td>101</td>
                <td>
                  <button className="btn btn-error">Revoked</button>
                </td>
              </tr>
              
              <tr className="hover">
                <th>3</th>
                <td>Marry</td>
                <td>405</td>
                <td>
                  <button className="btn btn-error">Granted</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SMManageResident;
