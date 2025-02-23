import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [value, setValue] = useLocalStorage("count", 0);
  return (
    <div>
      <h1>Use Local storage hook</h1>
      <h1>{value}</h1>
      <button onClick={() => setValue(value - 1)}>dec</button>
      <button onClick={() => setValue(value + 1)}>inc</button>
      <button onClick={() => setValue(0)}>reset</button>
    </div>
  );
}
