
import { lazy, Suspense } from "react"

const LazyComponent = lazy(() => import("./LazyComponent"))

function Dashboard() {

    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={<p>Loading please wait bsdk</p>}>
                <LazyComponent />
            </Suspense>
        </div>
    )
}

export default Dashboard
