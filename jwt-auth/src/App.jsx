import { useState } from "react"
import Login from "./Login"

const initialFormValues = {
  userName: "",
  password: ""
}
function App() {
  const [formData, setFormData] = useState(initialFormValues);
  function handleSubmit(e) {
    e.preventDefault();
    setFormData(initialFormValues)
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-semibold">JWT Authentication</h1>
      <div className="flex justify-center">
        <Login formData={formData} onSetFormData={setFormData} onHandleSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default App
