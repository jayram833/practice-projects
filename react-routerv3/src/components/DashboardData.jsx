import useFetch from "../hooks/useFetch";
function Dashboard() {
  const { data, loading, error } = useFetch(
    "https://reqres.in/api/users?delay=3",
  );
  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <table className="min-w-full border-collapse border border-gray-400 shadow-lg">
        <thead>
          <tr>
            <th className="border border-gray-400 bg-gray-200 px-4 py-2 text-left">
              First Name
            </th>
            <th className="border border-gray-400 bg-gray-200 px-4 py-2 text-left">
              Last Name
            </th>
            <th className="border border-gray-400 bg-gray-200 px-4 py-2 text-left">
              Email Name
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <DataRow item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DataRow({ item: { first_name, last_name, email } }) {
  return (
    <tr className="hover:bg-blue-50">
      <td className="border border-gray-400 px-4 py-2">{first_name}</td>
      <td className="border border-gray-400 px-4 py-2"> {last_name}</td>
      <td className="border border-gray-400 px-4 py-2">{email}</td>
    </tr>
  );
}
export default Dashboard;
