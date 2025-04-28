import { useState } from "react";

function AddFarmerForm() {
  const [formData, setFormData] = useState({
    farmerId: "",
    fullName: "",
    contactNumber: "",
    village: "",
    isActive: true,
    dateAdded: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.fullName || !formData.contactNumber) {
      alert("Please fill out all required fields!");
      return;
    }
    console.log("Form submitted:", formData);
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-5"> 
        <div className="flex flex-col gap-4 w-[600px]  py-5 px-4 bg-gray-100 rounded-md">
          <h1 className="font-semibold text-2xl text-center">Add New Farmer</h1>
            <div>
                <label htmlFor="fullName" className="font-semibold">Full Name: </label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="bg-white px-2 py-1 rounded-sm focus:outline-none w-100"/>
            </div>
            <div>

                <label htmlFor="contactNumber" className="font-semibold">Contact No.: </label>
                <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="bg-white px-2 py-1 rounded-sm focus:outline-none"/>
            </div>
            <div>
                <label htmlFor="village" className="font-semibold">Village: </label>
                <input type="text" id="village" name="village" value={formData.village} onChange={handleChange} className="bg-white px-2 py-1 rounded-sm focus:outline-none w-70"/>
            </div>

            <button type="submit" className="btn-primary bg-green-500 px-2 py-1 cursor-pointer rounded-md w-40 self-center">Submit</button>
        </div>
    </form>
  );
}

export default AddFarmerForm;
