import { useState, memo } from "react";

export default function Memo() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <HeavyComponent value={toggle} />
    </div>
  );
}
const HeavyComponent = memo(function HeavyComponent({ value }) {
  console.log("Rendering HeavyComponent...");

  let computedValue = 0;
  for (let i = 0; i < 1000000000; i++) {
    computedValue += i % 10;
  }
  return <p>Heavy Computation Result: {computedValue}</p>;
});
