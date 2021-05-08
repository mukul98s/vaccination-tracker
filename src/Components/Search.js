import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import useFetch from "../utils/useFetch";

import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";
import Center from "./Center";

function Search() {
  const [stateCode, setStateCode] = useState(null);
  const [districts, setDistricts] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [districtCode, setDistrictCode] = useState(null);

  const { data, isLoading, error } = useFetch(
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

  return (
    <React.Fragment>
      {error && (
        <div className="error">
          <h3 className="error__text">{error}</h3>
        </div>
      )}

      {!error && (
        <section className="search section">
          <div className="search__date">
            <h2 className="search__title">Select Date</h2>
            <DatePicker
              className="datepicker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
          </div>
          <div className="search__location">
            <article className="search__state">
              <h2 className="search__title">Search State</h2>
              <select
                name="state"
                onChange={(e) => setStateCode(e.target.value)}
              >
                <option value="Select State" selected disabled hidden>
                  Select State
                </option>
                {data &&
                  data.states.map((state) => {
                    return (
                      <option value={state.state_id} key={state.state_id}>
                        {state.state_name}
                      </option>
                    );
                  })}
              </select>
            </article>
            <article className="search__district">
              <h2 className="search__title">Search District</h2>
              <select
                name="district"
                onChange={(e) => setDistrictCode(e.target.value)}
              >
                <option value="Select District" selected disabled hidden>
                  Select District
                </option>
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
            </article>
          </div>
        </section>
      )}
      {districtCode && <Center district_code={districtCode} date={startDate} />}
    </React.Fragment>
  );
}

export default Search;
