import React from "react";
import moment from "moment";
import useFetch from "../utils/useFetch";
import CenterData from "./CenterData";

function Center({ district_code, date }) {
  const formattedDate = moment(date).format("DD-MM-YYYY");
  const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district_code}&date=${formattedDate}`;

  const { data, isLoading, error } = useFetch(url);

  if (data) {
    console.log(data.centers.length);
  }

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
        <div className="center__data">
          {data.centers.map((center) => {
            return <CenterData center={center} />;
          })}
        </div>
      )}
    </section>
  );
}

export default Center;
