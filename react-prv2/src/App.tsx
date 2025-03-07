import { memo, useCallback, useEffect, useState } from "react"
import data from "./data.json"

interface UserInt {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  avatar: string
}
interface UserProps {
  user: UserInt
}

type Dimensions = {
  width: number,
  height: number
}

function App() {
  const [users, setUsers] = useState<UserInt[]>(data);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [dim, setDim] = useState<Dimensions[]>([])

  function handleThemeSwitch() {
    setTheme(prev => prev === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme)
  }, [theme]);

  function getImageSize(url: string): Promise<Dimensions> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;

      img.onload = function () {
        resolve({ width: img.width, height: img.height })
      }

      img.onerror = function () {
        reject(new Error("Failed to load image."))
      }
    })
  }



  const getSizes = useCallback(async () => {
    const sizes: Dimensions[] = await Promise.all(users.map(function (usr) {
      return getImageSize(usr.avatar);
    }))
    console.log(sizes)
    setDim(sizes)
  }, [users])

  return (
    <div className="bg-lime-50 dark:text-gray-200 dark:bg-slate-800">
      <nav>
        <button onClick={handleThemeSwitch} className="cursor-pointer border px-3 rounded-md">{theme === "light" ? "dark" : "light"}</button>
      </nav>
      <h1>React optimisations</h1>
      <div>
        <ul>
          {users.map(user => <User key={user.id} user={user} />)}
        </ul>
      </div>
      <button onClick={getSizes} className="cursor-pointer border px-3 rounded-md">get</button>
      <ul>
        {dim.map((d, i) => <ImageSizes key={i} d={d} />)}
      </ul>
    </div>
  )
}

function ImageSizes({ d }) {
  return <li>{d.width} -- {d.height}</li>
}

const User = memo(function ({ user }: UserProps) {
  console.log("red")
  return <li>
    {user.first_name}-{user.email}
  </li>
})


export default App

