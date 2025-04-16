import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Contact from "./Contact";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
