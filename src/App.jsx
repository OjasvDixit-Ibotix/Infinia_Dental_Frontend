import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BgLoginRegister from "../src/components/BgLoginRegister";
// import LoginCard from "../src/components/SignUpCard";
// import SignUpCard from "../src/components/SignUpCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BgLoginRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
