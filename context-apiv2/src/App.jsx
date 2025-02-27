import { lazy, Suspense, useEffect, useState } from "react";
import FlexBox from "./FlexBox";
import Grid from "./Grid";
// import useDebounce from "./useDebounce";

// import LazyComponent from "./LazyComponent";
const LazyComponent = lazy(() => import("./LazyComponent"));
const LazyComponent2 = lazy(() => import("./LazyComponent2"));

// const URL = `https://reqres.in/api/users?delay=3`;

export default function App() {
  // const [inputText, setInputText] = useState("");
  // const debounceValue = useDebounce(inputText, 500);
  // useEffect(() => {
  //   console.log(debounceValue);
  // }, [debounceValue]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  return (
    <div>
      <h1>Debounce Hook</h1>
      <FlexBox />
      <Grid />
      {/* <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      /> */}
      <button
        onClick={() => setShow(true)}
        className="bg-lime-200 text-gray-800 cursor-pointer px-2 py-1.5 rounded-md"
      >
        Show Data
      </button>
      <button
        onClick={() => setShow1(true)}
        className="bg-green-200 text-gray-800 cursor-pointer px-2 py-1.5 rounded-md"
      >
        Show Data
      </button>
      <span className="flex gap-1">
        <Suspense fallback={<p>Loading...</p>}>
          {show && <LazyComponent />}
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          {show1 && <LazyComponent2 />}
        </Suspense>
      </span>
    </div>
  );
}
