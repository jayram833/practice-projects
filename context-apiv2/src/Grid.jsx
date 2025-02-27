function Grid() {
  return (
    <div>
      <h1>Grid</h1>
      <div className=" bg-orange-200 grid grid-cols-3 gap-2 p-4 text-center">
        <div className="bg-lime-400 p-4">Test 1</div>
        <div className="bg-lime-400 p-4">Test 2</div>
        <div className="bg-lime-400 p-4">Test 3</div>
        <div className="bg-lime-400 p-4">Test 4</div>
        <div className="bg-lime-400 p-4">Test 5</div>
      </div>
    </div>
  );
}

export default Grid;
