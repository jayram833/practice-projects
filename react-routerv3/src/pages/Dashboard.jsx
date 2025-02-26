import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard/users");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={handleClick}
        className="cursor-pointer rounded-md bg-lime-600 px-2 py-1.5 text-gray-300"
      >
        Get Users
      </button>
      <Outlet />
    </div>
  );
}
export default Dashboard;
