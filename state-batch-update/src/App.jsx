import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("jayram");
  const [company, setCompany] = useState("Infosys");

  function handleClick() {
    setCount();
    setName();
    setCompany();
  }

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  return (
    <div>
      <h1>React State Update Batching</h1>
      <button onClick={handleClick}>Update States</button>
    </div>
  );
}
