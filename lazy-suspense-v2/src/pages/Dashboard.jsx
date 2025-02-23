// import LazyComponent from "../LazyComponent";
import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("../LazyComponent"));

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<h2>Loading lazy conponent...</h2>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default Dashboard;
