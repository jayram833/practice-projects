import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
import { useEffect } from "react";
import { fetchUsers } from "./userSlice";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Redux Toolkit practice - Counter app</h1>
      <h1>{count}</h1>
      <div className="btns">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

      <div className="users">
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
