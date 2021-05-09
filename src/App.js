import React from "react";
import Search from "./Components/Search";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <div className="app__title">
          <h2>Search Vaccination Center</h2>
        </div>
        <Search />
      </div>

      <footer>
        <div className="section">
          <h3>
            Developed by{" "}
            <a href="https://www.linkedin.com/in/mukul98s/" target="_blank">
              Mukul Sharma
            </a>
          </h3>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
