import { useState } from "react";
import ToastButtons from "./ToastButtons";
import Toast from "./Toast";

function App() {
  const [toasts, setToasts] = useState([]);

  const addToast = (color, message) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, color, message }]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 4000);
  };

  return (
    <div className="relative">
      {toasts.map((toast, index) => (
        <Toast
          key={toast.id}
          className={toast.color}
          style={{ bottom: `${index * 60}px` }}
        >
          {toast.message}
        </Toast>
      ))}
      <h1 className="text-center font-semibold text-4xl">Toast Notifications</h1>
      <div>
        <ToastButtons addToast={addToast} />
      </div>
    </div>
  );
}

export default App;
