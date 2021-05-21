import React, { useState } from "react";
import moment from "moment";
import useFetch from "../utils/useFetch";
import CenterData from "./CenterData";

function Center({ district_code, date }) {
  const [code, setCode] = useState(0);
  const formattedDate = moment(date).format("DD-MM-YYYY");
  const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district_code}&date=${formattedDate}`;

  const { data, isLoading, error } = useFetch(url);
  const pincodes = [];
  let filteredData = [];

  if (data) {
    data.centers.map((center) => pincodes.push(center.pincode));
    if (code)
      filteredData = [
        ...data.centers.filter((c) => c.pincode === parseInt(code)),
      ];
    else filteredData = [...data.centers];
  }

  const filteredCodes = [...new Set(pincodes)];

  console.log(filteredData);

  return (
    <section className="center section">
      <div className="center__title">
        <h2>Available Centers</h2>
      </div>

      {isLoading && (
        <div className="center__loader">
          <div className="loader">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="error">
          <h3 className="error__text">{error}</h3>
        </div>
      )}

      {data && (
        <div className="error">
          {data.centers.length === 0 && (
            <h3 className="error__text">
              Please Search With a Different Date!!!
            </h3>
          )}
        </div>
      )}

      {data && (
        <React.Fragment>
          <div className="center__filter">
            <select name="filter" onChange={(e) => setCode(e.target.value)}>
              <option value="Filter by Pincode" selected disabled hidden>
                Filter By Pincode
              </option>
              {filteredCodes.map((code, index) => {
                return <option key={index}>{code}</option>;
              })}
            </select>
          </div>
          <div className="center__data">
            {filteredData.map((center, index) => {
              return <CenterData center={center} key={index} />;
            })}
          </div>
        </React.Fragment>
      )}
    </section>
  );
}

export default Center;
