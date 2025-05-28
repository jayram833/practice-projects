import { useState } from "react"

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState({ nameError: '', emailError: '', messageError: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(prev => ({ ...prev, [`${name}Error`]: '' }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { nameError: '', emailError: '', messageError: '' };

    if (!formData.name.trim()) {
      newErrors.nameError = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.emailError = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.emailError = 'Enter a valid email';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.messageError = 'Message is required';
      valid = false;
    }

    setError(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
      }, 500);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {isSubmitted ? (
        <ThankYou />
      ) : (
        <>
          <h1 className="font-semibold text-4xl text-center mb-6">Contact Form</h1>
          <div className="border-[0.5px] border-gray-500 w-[500px] px-10 py-10 rounded-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  onChange={handleForm}
                  value={formData.name}
                  type="text"
                  id="name"
                  name="name"
                  className="focus:outline-none border-[0.5px] border-gray-400 rounded-sm w-full px-2 py-1"
                />
                <div className="text-red-600 text-sm">{error.nameError}</div>
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  onChange={handleForm}
                  value={formData.email}
                  type="email"
                  id="email"
                  name="email"
                  className="focus:outline-none border-[0.5px] border-gray-400 rounded-sm w-full px-2 py-1"
                />
                <div className="text-red-600 text-sm">{error.emailError}</div>
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  onChange={handleForm}
                  value={formData.message}
                  name="message"
                  id="message"
                  rows="4"
                  className="focus:outline-none border-[0.5px] border-gray-400 rounded-sm w-full px-2 py-1"
                />
                <div className="text-red-600 text-sm">{error.messageError}</div>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition-colors">
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}


function ThankYou() {
  return <div className="text-center mt-10">
    <h2 className="text-2xl font-semibold text-green-600">Thank you for contacting us!</h2>
    <p>We will get back to you shortly.</p>
  </div>
}

export default App
