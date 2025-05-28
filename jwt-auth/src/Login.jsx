
function Login({ formData, onSetFormData, onHandleSubmit }) {
    function handleChange(e) {
        const { name, value } = e.target;
        onSetFormData({ ...formData, [name]: value });
    }
    return (
        <div className="bg-gray-100 rounded-md w-[600px] p-10">
            <h1 className="text-3xl font-semibold text-center py-5">Login</h1>
            <form onSubmit={onHandleSubmit} className="flex flex-col items-center gap-5">
                <InputField type="text" handleChange={handleChange} label="Username" formData={formData} name="userName" />
                <InputField type="password" handleChange={handleChange} label="Password" formData={formData} name="password" />
                <button type="submit" className="bg-indigo-600 text-white px-5 py-1 rounded-sm cursor-pointer mt-5 hover:px-10 transition-all duration-300">Login</button>
            </form>
        </div>
    )
}

function InputField({ label, handleChange, formData, type, name }) {
    return <div>
        <label htmlFor={label}>{label}: </label>
        <input
            onChange={handleChange}
            value={formData[name]}
            type={type}
            name={name}
            id={label}
            className="focus:outline-none bg-white w-[300px] p-1 rounded-sm" />
    </div>
}

export default Login
