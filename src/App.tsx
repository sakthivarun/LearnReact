import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Main from "./component/main";
import XoMain from "./component/XO/xomain";
import Home from "./component/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route index element={<Home />} />
          <Route path="/XO" element={<XoMain />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
