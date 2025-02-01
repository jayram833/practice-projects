import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((time) => time + 1);
    }, 1000);
    // return clearTimeout(timer);
  }, [time]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{time}</p>
    </div>
  );
}

export default App;
