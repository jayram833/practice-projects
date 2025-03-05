import { useEffect, useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";


import data from "./data.json";
import Product from "./Product";

const myProducts = data.map(function (item) {
  const tempObj = { id: item.id, name: item.title, price: item.price, rating: item.rating, image: item.image };
  return tempObj;
})


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode(!darkMode)
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <button onClick={toggleTheme} className="absolute text-2xl right-7 top-7 cursor-pointer ">{darkMode ? <IoSunnyOutline style={{ color: "white" }} />
        : <IoMoonOutline />
      }</button>
      <h1 className="text-2xl dark:text-gray-100 font-semibold">Product Component Using Tailwind css</h1>
      <div>
        <h1 className="text-2xl font-semibold dark:text-white  text-center">Products</h1>
        <div className="grid  p-5 lg:grid-cols-4 2xl:grid-cols-5 md:grid-cols-2 gap-3">
          {myProducts.map(product => <Product key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  )
}

export default App
