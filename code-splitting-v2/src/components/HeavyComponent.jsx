function HeavyComponent() {
  for (let index = 0; index < 1000000000; index++) {}
  return (
    <div>
      <h3>Heavy Component</h3>
    </div>
  );
}

export default HeavyComponent;
