import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
import Settings from "./pages/Settings.jsx";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
