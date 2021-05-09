import React, { useState } from "react";
import moment from "moment";

function CenterData({ center }) {
  const { center_id, address, name, sessions, pincode, fee_type } = center;
  const [showSession, setShowSession] = useState(false);

  return (
    <React.Fragment>
      <section className="centerData" key={center_id}>
        <div className="centerData__container">
          <h3>Center Name: {name}</h3>
          <h3 className={fee_type === "Free" ? "green" : "red"}>
            Fee: {fee_type}
          </h3>
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
                    Available Capacity:{" "}
                    <span>{session.available_capacity}</span>
                  </h4>
                  <h4>
                    Date: <span>{session.date}</span>
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
      </section>
    </React.Fragment>
  );
}

export default CenterData;
