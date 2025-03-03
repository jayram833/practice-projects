function App() {
  // Type Annotations
  const arr: number[] = [1, 2, 43, 4];
  const arr1: string[] = ["hi", "hello"];
  const obj1: { name: string; age: number } = { name: "jayram", age: 23 };
  // Type inference

  // Interfaces
  interface User {
    fName: string;
    lName: string;
    age: number;
    empId: number;
    isPresent: boolean;
  }

  const jayram: User = {
    fName: "Jayram",
    lName: "Pansare",
    age: 29,
    empId: 12314,
    isPresent: false,
  };

  type Info = {
    x: number;
    y: number;
  };

  // type aliases
  const coords: Info = { x: 10, y: 20 };
  // console.log(coords);

  // Union
  let id: number | string;
  id = 20;
  id = "23l";
  // Intersection

  type Employee = { names: string } & { ids: number };
  const emp: Employee = { names: "jay", ids: 23 };

  return (
    <div>
      <h1>Typescript Practice</h1>
    </div>
  );
}

export default App;
