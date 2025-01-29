import { useState } from "react";

const numPages = Array.from({ length: 10 }, (_, i) => i + 1);
export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  function handlePrev() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNext() {
    if (currentPage < numPages.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handleNav(p) {
    setCurrentPage(p);
  }

  return (
    <div>
      <h1>Pagination</h1>
      <div className="card text-center">Page Number-{currentPage}</div>
      <div className="pages">
        <button onClick={handlePrev}>Prev</button>
        {numPages.map((p) => (
          <button
            key={p}
            className={`mt-3 ${currentPage === p ? "current-page" : ""}`}
            onClick={() => handleNav(p)}
          >
            {p}
          </button>
        ))}
        <button className="mt-3" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
