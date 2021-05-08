import React, { useEffect } from "react";
import Search from "./Components/Search";

function App() {
  return (
    <div className="app">
      <div className="app__title">
        <div className="section">
          <h2>Search Vaccination Center</h2>
        </div>
      </div>
      <Search />
    </div>
  );
}

export default App;
