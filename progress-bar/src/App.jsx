import { useEffect, useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress !== 100) {
        setProgress(() => progress + 10);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div>
      <h1>Progress Bar</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "300px", height: "10px" }}>
          <div
            style={{
              width: `${progress}%`,
              backgroundColor: "red",
              height: "10px",
              transition: "width 300ms ease-in-out",
            }}
          ></div>
        </div>
        <span>{progress}%</span>
      </div>
    </div>
  );
}

export default App;
