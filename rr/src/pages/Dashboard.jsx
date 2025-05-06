import { lazy, Suspense } from "react"
// import HeavyComponent from "../components/HeavyComponent"

const HeavyComponent = lazy(()=> import("../components/HeavyComponent"))

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <HeavyComponent />
            </Suspense>
        </div>
    )
}

export default Dashboard
