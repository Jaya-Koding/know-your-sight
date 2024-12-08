import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Detection from "./pages/Detection"
import AboutUs from "./pages/AboutUs"
import UpgradePlan from "./pages/UpgradePlan"
import HistoryDetection from "./pages/HistoryDetection"
import DownloadPdf from "./pages/DownloadPdf"
import Introduction from "./pages/Introduction"

const App:React.FC = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/introduction" element={<Introduction />}/>
          <Route path="/detection" element={<Detection />}/>
          <Route path="/history" element={<HistoryDetection />}/>
          <Route path="/download" element={<DownloadPdf />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/upgrade" element={<UpgradePlan />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
