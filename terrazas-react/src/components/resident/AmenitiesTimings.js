import React from "react";

function AmenitiesTimings() {
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
        <div className="bg-base-200 shadow-xl" style={{flex:1,marginLeft:"0px"}}>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Amenity type</th>
                  <th>Timings</th>
                  <th>Days open</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Gym</td>
                  <td>6AM-10PM</td>
                  <td>MTWTFSS</td>
                </tr>

                <tr>
                  <th>2</th>
                  <td>Spa</td>
                  <td>10AM-6PM</td>
                  <td>MTWTF</td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>Swimming Pool</td>
                  <td>7AM-4PM</td>
                  <td>MTWTF</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmenitiesTimings;
