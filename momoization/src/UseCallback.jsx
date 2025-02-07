import { memo, useCallback, useState } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count:{count}</p>
      <Button label="Increment" increment={increment} />
    </div>
  );
}

const Button = memo(function Button({ label, increment }) {
  return <button onClick={increment}>{label}</button>;
});
