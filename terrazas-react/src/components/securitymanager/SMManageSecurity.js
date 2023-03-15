import React from "react";

function SMManageSecurity() {
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
        <h1 className="hdng">Manage Security</h1>
      </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Designation</th>
                <th>Duty</th>
              </tr>
            </thead>
            <tbody>
              
              <tr className="hover">
                <th>1</th>
                <td>Rimal</td>
                <td>Pool</td>
                <td>
                  <button className="btn btn-error">On-duty</button>
                </td>
              </tr>
              
              <tr className="hover">
                <th>2</th>
                <td>Sam</td>
                <td>Building 1</td>
                <td>
                  <button className="btn btn-error">Off-duty</button>
                </td>
              </tr>
              
              <tr className="hover">
                <th>3</th>
                <td>Mary</td>
                <td>Building 4</td>
                <td>
                  <button className="btn btn-error">On-Duty</button>
                </td>
              </tr>
              
              <tr className="hover">
                <th>4</th>
                <td>Sonny</td>
                <td>Garden</td>
                <td>
                  <button className="btn btn-error">On-Duty</button>
                </td>
              </tr>
              
              <tr className="hover">
                <th>5</th>
                <td>Max</td>
                <td>Pool</td>
                <td>
                  <button className="btn btn-error">On-Duty</button>
                </td>
              </tr>
              
              <tr className="hover">
                <th>6</th>
                <td>Rose</td>
                <td>Pool</td>
                <td>
                  <button className="btn btn-error">Off-Duty</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SMManageSecurity;
