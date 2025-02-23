import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./LazyComponent"));

export default function App() {
  return (
    <div>
      <h1>Lazy and Suspense</h1>
      <BrowserRouter>
        <nav
          style={{
            display: "flex",
            listStyle: "none",
            gap: "10px",
          }}
        >
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </nav>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
