import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Contact from "./pages/Contact";
import About from "./pages/About";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/post" element={<Post />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
