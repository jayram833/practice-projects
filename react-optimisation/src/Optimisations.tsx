import { memo, useState } from "react"

type User = {
    id: number,
    name: string
}

function Optimisations() {
    const [users, setUsers] = useState<User[]>([{ id: 1, name: 'Alice' }]);
    const [count, setCount] = useState(0);
    return (
        <div>
            {/* <UserList users={users} />
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Count: {count}</p> */}
        </div>
    )
}


// useMemo() hook



// memo() function
// const UserList = memo(({ users }: User) => {
//     console.log("User List rendered");
//     return <ul>
//         {users.map(user => <li key={user.id}>{user.name}</li>)}
//     </ul>
// })


export default Optimisations
