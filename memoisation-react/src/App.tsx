import React, { useState, useMemo, useCallback } from "react";

// Child component (memoized)
const Child = React.memo(({ onCalculate, data }) => {
  console.log("Child Rendered!");
  return (
    <div>
      <button onClick={onCalculate}>Calculate</button>
      <p>Data: {data}</p>
    </div>
  );
});

const App = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  // Memoizing an expensive computation
  const expensiveValue = useMemo(() => {
    console.log("Expensive computation...");
    return num * 2;
  }, [num]);

  // Memoizing function to prevent unnecessary re-renders
  const handleCalculation = useCallback(() => {
    console.log("Calculating...");
  }, []);

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
      <button onClick={() => setNum(num + 1)}>Change Number ({num})</button>

      {/* Child will only re-render if props change */}
      <Child onCalculate={handleCalculation} data={expensiveValue} />
    </div>
  );
};

export default App;
