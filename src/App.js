import React from "react";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
