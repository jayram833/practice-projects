import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { lazy } from "react";
import { Suspense } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));
import DashboardData from "./components/DashboardData";

function App() {
  return (
    <Router>
      <nav className="bg-lime-200 p-4">
        <ul className="flex justify-end gap-4 pr-1">
          <li>
            <NavLink
              to="/"
              className="rounded-md bg-lime-300 px-3 py-1.5 text-gray-800 hover:bg-lime-400"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className="rounded-md bg-lime-300 px-3 py-1.5 text-gray-800 hover:bg-lime-400"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="rounded-md bg-lime-300 px-3 py-1.5 text-gray-800 hover:bg-lime-400"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="users" element={<DashboardData />}></Route>
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route
            path="*"
            element={<p className="text-2xl">Page not found!</p>}
          ></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
