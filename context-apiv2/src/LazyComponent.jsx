import data from "./MOCK_DATA.json";
import useLocalStorage from "./useLocalStorage";
function LazyComponent() {
  const [storedValue, setStoredValue] = useLocalStorage("data", data);
  console.log(storedValue);

  return (
    <div>
      <div>
        <table className="border">
          <thead>
            <tr className="bg-gray-300">
              <th className="border">First Name</th>
              <th className="border">Last Name</th>
              <th className="border">Gender</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <TableRow row={row} key={row.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const TableRow = function ({ row: { first_name, last_name, gender } }) {
  return (
    <tr className="hover:bg-blue-200">
      <td className="border px-2 py-1.5">{first_name}</td>
      <td className="border px-2 py-1.5">{last_name}</td>
      <td className="border px-2 py-1.5">{gender}</td>
    </tr>
  );
};

export default LazyComponent;
