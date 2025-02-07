import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Todos from "./pages/Todos";
import NotFound from "./pages/NotFound";
// https://reqres.in/api/login
// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// }

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <h1>Todo App</h1>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/app" element={<Todos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
