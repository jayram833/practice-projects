import { memo, useEffect, useMemo, useState } from "react";

const URL = `https://reqres.in/api/unknown`;
export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [inputText, setInputText] = useState("");
  const [showName, setShowName] = useState("");
  async function getData() {
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error("HTTP error");
      const { data } = await response.json();
      // console.log(data);
      setUsers(data);
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  const names = useMemo(
    function () {
      return users.map((u) => u.name).sort();
    },
    [users],
  );
  // console.log(names);
  return (
    <div className="bg-yellow-400 p-3">
      <input
        type="text"
        placeholder="name"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-50 rounded-full bg-yellow-100 px-4 py-1 transition-all duration-300 focus:w-80 focus:outline-none"
      />

      <button onClick={() => setShowName(true)}>Show</button>
      {showName && <p>{inputText}</p>}
      <div>
        {users.map((item) => (
          <List key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const List = memo(function ({ item: { name } }) {
  return <li>{name}</li>;
});
