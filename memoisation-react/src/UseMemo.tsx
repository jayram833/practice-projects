import { useMemo } from "react";

function UseMemo({ num }) {
    const compute = function (n) {
        console.log("Computing");
        let sum = 0;
        for (let i = 0; i < 100000; i++) {
            sum += i;
            return sum + n
        }
    }
    const memoisedValue = useMemo(() => compute(num), [num])
    return (
        <div>
            <p>Computed Value: {memoisedValue}</p>
        </div>
    )
}

export default UseMemo
