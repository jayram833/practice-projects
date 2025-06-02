import { useCallback, useEffect, useState } from "react"
import Cart from "./Cart"
import ProductList from "./ProductList"
import cartProducts from "./products.json"
import CartItems from "./CartItems"
import useDebounce from "./useDebounce"

type ProductItemProps = {
  name: string,
  price: number,
  id: number
}

function App() {
  const [allProducts] = useState(cartProducts);
  const [products, setProducts] = useState(cartProducts);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [queryText, setQueryText] = useState("");
  const debouncedValue = useDebounce(queryText, 500);

  const handleAddToCart = useCallback((newItem) => {
    setCartItems((prevCartItems) => {
      if (prevCartItems.some(item => item.id === newItem.id)) {
        return prevCartItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...newItem, quantity: 1 }];
      }
    });
  }, []);

  function handleChange(e) {
    const sortedCopy = [...products];
    if (e.target.value === "price") {
      setProducts(sortedCopy.sort((a, b) => a.price - b.price));
    } else if (e.target.value === "name") {
      setProducts(sortedCopy.sort((a, b) => a.name.localeCompare(b.name)));
    }
  }

  useEffect(() => {
    if (debouncedValue) {
      const filtered = allProducts.filter(item =>
        item.name.toLowerCase().includes(debouncedValue.toLowerCase())
      );
      setProducts(filtered);
    } else {
      setProducts(allProducts);
    }
  }, [debouncedValue, allProducts]);

  return (
    <div>
      <h1 className="text-4xl text-center font-semibold">Product Shipping Interface</h1>
      <div className="bg-violet-400 p-4">
        <select onChange={handleChange} className="bg-violet-100 focus:outline-none mr-2 rounded-md px-2 py-1">
          <option>None</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
        <input
          type="text"
          onChange={e => setQueryText(e.target.value)}
          value={queryText}
          placeholder="search product"
          className="focus:outline-none bg-violet-100 px-2 py-1 rounded-md w-100"
        />
      </div>

      <div className="flex justify-end m-5">
        <Cart cartItems={cartItems} onSetShowCart={setShowCart} />
      </div>
      <div className="flex justify-end ">
        {cartItems.length > 0 && showCart && <CartItems cartItems={cartItems} />}
      </div>
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App
