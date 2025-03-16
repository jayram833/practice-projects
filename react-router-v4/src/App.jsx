import { BrowserRouter as Router,Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
// import Dashboard from "./Dashboard";
import Contact from "./Contact";
import { lazy, Suspense, useEffect, useState } from "react";
const Dashboard = lazy(()=>import ("./Dashboard"));

function withLogin(WrappedComponent){
  return function(props){
    const isAuthenticated=true;
    return isAuthenticated ? <WrappedComponent {...props}/> : <Navigate to="/login"/>
  }
}

const ProtectedDashboard = withLogin(Dashboard);
const ProtectedContact = withLogin(Contact);

function App() {
  const [title, setTitle] = useState("React Router");

  useEffect(()=>{
    document.title=title;
  },[title])

  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/dashboard" element={<ProtectedDashboard setTitle={setTitle}/>}/>
              <Route path="/contact" element={<ProtectedContact/>}/>
            </Routes>
          </Suspense>
      </div>
    </div>
  </Router>
  )
}

export default App
