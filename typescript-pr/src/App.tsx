
function App() {

  // Type Annotations
  const firstName: string = "jayram";
  const age: number = 29;
  const isMarried: boolean = true;

  // Type Inference - ts automatically detects the type
  const lastName = "pansare";

  // function parameters and typing parameters

  function add(a: number, b: number): number {
    return a + b;
  }
  add(2, 3);

  function sub(a: number, b: number): void {
    console.log(a - b);
  }
  sub(3, 3);

  // Arrays and Objects

  const arr: number[] = [1, 2, 3, 4];

  const obj: { name: string, age: number } = { name: "jayram", age: 23 };

  // Interfaces

  interface User {
    city: string,
    zipcode: number
  }

  const user: User = { city: "pune", zipcode: 12345 }

  // type aliases

  type Point = { x: number, y: number };

  let coords: Point = { x: 23, y: 34 }


  return (
    <div>
      <h1>Todo App</h1>
    </div>
  )
}

export default App
