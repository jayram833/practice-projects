import data from "./MOCK_DATA.json";
function LazyComponent2() {
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

function TableRow({ row: { first_name, last_name, gender } }) {
  return (
    <tr className="hover:bg-blue-200">
      <td className="border px-2 py-1.5">{first_name}</td>
      <td className="border">{last_name}</td>
      <td className="border">{gender}</td>
    </tr>
  );
}

export default LazyComponent2;
