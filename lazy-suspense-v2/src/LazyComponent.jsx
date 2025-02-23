export default function LazyComponent() {
  for (let index = 0; index < 1000000000; index++) {}
  return (
    <div>
      <h2>I am Lazy component</h2>
    </div>
  );
}
