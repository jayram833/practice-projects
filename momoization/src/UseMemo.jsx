import { useMemo } from "react";

export default function UseMemo({ number }) {
  const compute = (num) => {
    console.log("Expensive function runing...");
    return num * 2;
  };
  const doubledValue = useMemo(() => compute(number), [number]);
  return (
    <div>
      <h1>Use Memo</h1>
      <p>Computed Value: {doubledValue}</p>
    </div>
  );
}
