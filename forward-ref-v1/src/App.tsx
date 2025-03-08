import { forwardRef, useRef, useState } from "react"

function App() {
  return (
    <div className="bg-lime-300 pb-10">
      <h1>Forward Ref example</h1>
      <Parent />
    </div>
  )
}

interface User {
  firstName: string,
  lastName: string,
  city: string,
  age: number | string
}


function Parent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    age: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div>
      <Child
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
      />
      <Child
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
      />
      <Child
        placeholder="City"
        value={formData.city}
        onChange={(e) => handleChange("city", e.target.value)}
      />
      <Child
        placeholder="Age"
        value={formData.age}
        onChange={(e) => handleChange("age", e.target.value)}
      />
    </div>
  );
}

const Child = forwardRef(({ placeholder, value, onChange }, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-50 focus:w-80 transform:w duration-300 py-1 focus:outline-none bg-lime-50 rounded-md px-2"
    />
  );
});

export default App