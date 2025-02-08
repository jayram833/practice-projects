import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>Password Component</h1>
      <Password />
    </div>
  );
}

function Password() {
  const [type, setType] = useState("password");

  function handleToggle() {
    setType((prev) => (prev === "password" ? "text" : "password"));
  }

  return (
    <div>
      <input
        type={type}
        style={{ width: "300px", padding: "8px", fontSize: "15px" }}
      />
      <span
        onClick={handleToggle}
        style={{
          position: "relative",
          left: "-24px",
          top: "3px",
          cursor: "pointer",
        }}
      >
        {type === "password" ? <FaEye /> : <FaEyeSlash />}
      </span>
      {type === "text" && (
        <p style={{ color: "red" }}>Ha ha dekh le achhe se 😂</p>
      )}
    </div>
  );
}
