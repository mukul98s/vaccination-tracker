import React, { useState } from "react";

function CenterData({ address, name, sessions, pincode, fee, id }) {
  const [showSession, setShowSession] = useState(false);

  return (
    <div className="centerData" key={id}>
      <div className="centerData__container">
        <h3>Center Name: {name}</h3>
        <h3>Pincode: {pincode}</h3>
        <p>Address: {address}</p>
        <h4>Fee: {fee}</h4>
      </div>
      <div className="centerData__sessions">
        {sessions.map((session) => {
          return (
            <div
              className={`centerData__session ${showSession ? "show" : ""}`}
              key={session.session_id}
            >
              <div className="centerData__session__card">
                <h4>Available Capacity: {session.available_capacity}</h4>
                <p>Date: {session.date}</p>
                <h4>Vaccine: {session.vaccine}</h4>
                <h4>Minimum Age: {session.min_age_limit} Years</h4>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="centerData__toggle"
        onClick={() => setShowSession(!showSession)}
      >
        {!showSession ? "Show Sessions" : "Hide Sessions"}
      </button>
    </div>
  );
}

export default CenterData;
