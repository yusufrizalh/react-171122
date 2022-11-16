import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import About from "./pages/About";
import Gmap from "./pages/Gmap";
import Table from "./pages/Table";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import Container from "@material-ui/core/Container";

function App() {
  // mendeteksi adanya token
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Login />;
  }

  return (
    <div>
      <Router>
        <Navbar />
        <Container className="mt-5">
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/table" element={<Table />} />
              <Route exact path="/chart" element={<Chart />} />
              <Route exact path="/gmap" element={<Gmap />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </Container>
      </Router>
    </div>
  );
}

export default App;
