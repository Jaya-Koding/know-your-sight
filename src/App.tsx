import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Detection from "./pages/Detection"
import AboutUs from "./pages/AboutUs"
import UpgradePlan from "./pages/UpgradePlan"

const App:React.FC = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/detection" element={<Detection />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/upgrade" element={<UpgradePlan />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
