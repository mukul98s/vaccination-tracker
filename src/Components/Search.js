import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="search">
      <div className="search__date">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="search__location"></div>
    </div>
  );
}

export default Search;
