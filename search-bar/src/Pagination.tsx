import { useState } from "react";


const numPages: number[] = [1, 2, 3];

function Pagination() {
    const [currentPage, setCurrentPage] = useState<number>(1);

    function handlePagechange(num: number) {
        setCurrentPage(num)
    }

    function handleNext() {
        setCurrentPage(num => num + 1)
    }
    function handlePrev() {
        setCurrentPage(num => num - 1)
    }

    return (
        <div className="my-30 mx-10">
            <h1>Pagination</h1>
            <div className="flex justify-center items-center gap-4 w-max rounded-md border border-gray-300 px-2">
                <button className="border-r p-1 border-gray-300" onClick={() => handlePrev()}>Previous</button>
                {numPages.map(num => <button className="p-1  border-r border-gray-300" key={num}>{num}</button>)}
                <button onClick={() => handleNext()}>Next</button>
            </div>
        </div>
    )
}

export default Pagination

