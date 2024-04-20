// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";


const AppContent = () => {


  return (
    <Router>
 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
};

const App = () => {
  return (
    <>
      <AppContent />
    </>
  );
};

export default App;
