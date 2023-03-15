import React from "react";
import { Link } from "react-router-dom";

const GardenManagerHome = () => {
  return (
    <div>
      <style type="text/css">
        {`
 .form-container {
      padding-top: 24px;
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
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Garden capacity</div>
              <div className="stat-value">250</div>
            </div>

            <div className="stat">
              <div className="stat-title">Resident</div>
              <div className="stat-value">40</div>
            </div>

            <div className="stat">
              <div className="stat-title">Visitor</div>
              <div className="stat-value">25</div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="hdng">Garden Timings</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Day</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover">
                <th>1</th>
                <td>Monday</td>
                <td>8:00 AM</td>
                <td>6:00 PM</td>
                <td>
                  <button className="btn btn-error btn-sm">Edit</button>
                </td>
              </tr>

              <tr className="hover">
                <th>2</th>
                <td>Tuesday</td>
                <td>8:00 AM</td>
                <td>6:00 PM</td>
                <td>
                  <button className="btn btn-error btn-sm">Edit</button>
                </td>
              </tr>

              <tr className="hover">
                <th>3</th>
                <td>Wednesday</td>
                <td>8:00 AM</td>
                <td>6:00 PM</td>
                <td>
                  <button className="btn btn-error btn-sm">Edit</button>
                </td>
              </tr>
              <tr className="hover">
                <th>4</th>
                <td>Thursday</td>
                <td>8:00 AM</td>
                <td>6:00 PM</td>
                <td>
                  <button className="btn btn-error btn-sm">Edit</button>
                </td>
              </tr>
              <tr className="hover">
                <th>5</th>
                <td>Friday</td>
                <td>8:00 AM</td>
                <td>6:00 PM</td>
                <td>
                  <button className="btn btn-error btn-sm">Edit</button>
                </td>
              </tr>
              <tr className="hover">
                <th>6</th>
                <td>Saturday</td>
                <td>9:00 AM</td>
                <td>5:00 PM</td>
                <td>
                  <button className="btn btn-error btn-sm">Edit</button>
                </td>
              </tr>
              <tr className="hover">
                <th>7</th>
                <td>Sunday</td>
                <td>9:00 AM</td>
                <td>5:00 PM</td>
                <td>
                  <button className="btn btn-error btn-sm">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GardenManagerHome;
