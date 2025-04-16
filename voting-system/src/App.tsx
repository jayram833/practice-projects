import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Voting from "./Voting"
import Result from "./Result"

function App() {
  return (
    <div>
      <Router>
        <nav className="bg-blue-400 py-5">
          <ul className="flex gap-2 justify-center">
            <li><Link to="/" className="bg-blue-300 px-2 py-1 rounded-md">Voting</Link></li>
            <li><Link to="/result" className="bg-blue-300 px-2 py-1 rounded-md">Result</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Voting />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
