import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";


function handleSuccess(response) {
  const decoded = jwtDecode(response.credential);
  console.log("User Info:", decoded);
}
function handleError() {
  console.log("Login failed")
}

function App() {
  return (
    <div>
      <h1>Google Auth</h1>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  )
}

export default App
