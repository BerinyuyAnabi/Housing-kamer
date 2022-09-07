// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pages from "./pages/Pages";
import React from "react";

import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Pages />

      <Navigation />
    </div>
  );
}

export default App;
