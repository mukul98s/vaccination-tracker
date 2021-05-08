import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import useFetch from "../utils/useFetch";

import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

function Search() {
  const [stateCode, setStateCode] = useState(0);
  const [districts, setDistricts] = useState();
  const states = useFetch(
    "https://cdn-api.co-vin.in/api/v2/admin/location/states"
  );

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateCode}`
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("Unable to Get the Data");
          }
          return res.json();
        })
        .then((data) => setDistricts(data))
        .catch((error) => console.log(error.message));
    };
    fetchData();
  }, [stateCode]);

  const getDistricts = (e) => {
    setStateCode(e.target.value);
  };

  console.log(districts);

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="search">
      <div className="search__date">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="search__location">
        <div className="search__state">
          <h2>Search State</h2>
          <select name="state" onChange={getDistricts}>
            {states &&
              states.states.map((state) => {
                return (
                  <option
                    code={state.state_id}
                    value={state.state_id}
                    key={state.state_id}
                  >
                    {state.state_name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="search__district">
          <h2>Search District</h2>
          <select name="district">
            {districts &&
              districts.districts.map((district) => {
                return (
                  <option
                    value={district.district_id}
                    key={district.district_id}
                  >
                    {district.district_name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
