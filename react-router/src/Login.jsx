import { useEffect, useState } from "react";
import useLogin from "./hooks/useLogin";
import { useNavigate } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const { token, error, login } = useLogin();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handleLogin(e) {
    e.preventDefault();
    const { email, password } = formData;
    await login(email, password);
  }

  useEffect(() => {
    if (token) {
      navigate("/app");
    }
  }, [token, navigate]);
  return (
    <div className="login">
      <h1>Login</h1>
      <div>
        <form onSubmit={handleLogin} className="form-login">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
