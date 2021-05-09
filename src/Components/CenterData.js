import React, { useState } from "react";
import moment from "moment";

function CenterData({ address, name, sessions, pincode, fee, id }) {
  const [showSession, setShowSession] = useState(false);

  return (
    <div className="centerData" key={id}>
      <div className="centerData__container">
        <h3>Center Name: {name}</h3>
        <h3 className={fee === "Free" ? "green" : "red"}>Fee: {fee}</h3>
        <p>Address: {address}</p>
        <p>Pincode: {pincode}</p>
      </div>
      <div className="centerData__sessions">
        {sessions.map((session) => {
          return (
            <div
              className={`centerData__session ${showSession ? "show" : ""}`}
              key={session.session_id}
            >
              <div className="centerData__session__card">
                <h4>
                  Available Capacity: <span>{session.available_capacity}</span>
                </h4>
                <h4>
                  Date:{" "}
                  <span>{moment(session.date).format("MMMM Do YYYY")}</span>
                </h4>
                <h4>
                  Vaccine: <span>{session.vaccine}</span>
                </h4>
                <h4>
                  Minimum Age: <span>{session.min_age_limit} Years</span>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="centerData__toggle"
        onClick={() => setShowSession(!showSession)}
        className="btn"
      >
        {!showSession ? "Show Sessions" : "Hide Sessions"}
      </button>
    </div>
  );
}

export default CenterData;
