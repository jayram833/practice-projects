import Memo from "./Memo";
import UseMemo from "./UseMemo";
import UseCallback from "./UseCallback";
import { useState } from "react";

function App() {
  // const [val, setVal] = useState(0);
  // function handleClick() {
  //   setVal(val + 1);
  //   console.log("clicked");
  // }
  return (
    <div>
      {/* <Memo /> */}
      <>
        {/* <UseMemo number={10} />
        <button onClick={() => handleClick()}>test</button>
        <p>{val}</p> */}
      </>
      <UseCallback />
    </div>
  );
}

export default App;
