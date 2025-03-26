import { useState } from "react"
import Modal from "./Modal";

function App() {
  const [showModal, setshowModal] = useState(true);
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">React Portal</h1>
      {showModal && <Modal />}
    </div>
  )
}

export default App
