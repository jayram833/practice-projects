function HeavyAnalytics() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) sum += i; // Simulating a heavy calculation
  return <h2>Heavy Analytics Loaded</h2>;
}
export default HeavyAnalytics;
