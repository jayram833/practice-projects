import { useState } from "react";

const URL = `https://reqres.in/api/login`;

export default function useLogin() {
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error("Invalid credentials!");
      const { token: apiToken } = await response.json();
      setToken(apiToken);
    } catch (e) {
      setError(e.message);
    }
  };

  return { token, error, login };
}
