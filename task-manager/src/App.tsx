import { useEffect, useRef, useState } from "react"
import NavBar from "./NavBar.tsx"
import useProducts from "./useProducts.tsx"
import Cart from "./Cart.tsx"
import ProductCard from "./ProductCard.tsx"
import Loader from "./Loader.tsx"

const URL = "https://api.escuelajs.co/api/v1/products"

interface CartItem {
  id: number,
  title: string,
  images: string[],
  quantity: number,
  price: number,
}

function App() {
  const { products, error, loading } = useProducts(URL)
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleCartState() {
    setIsCartOpen(!isCartOpen)
  }

  function handleAddToCart(productObj: CartItem) {
    setCartItems((prevCartItems) => {
      const existItem = prevCartItems.find(item => item.id === productObj.id);
      if (existItem) {
        return prevCartItems.map(item => item.id === productObj.id ? { ...item, quantity: item.quantity + 1 } : item)
      } else {
        return [...prevCartItems, { ...productObj, quantity: 1 }]
      }
    })

  }

  function handleDelete(id: number) {
    setCartItems(cartItems.filter(item => item.id !== id))
  }


  if (loading) return <Loader />
  if (error) return <p>{error}</p>
  return (
    <div>
      <NavBar onCartOpen={handleCartState} />
      {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} cart={cartItems} onDelete={handleDelete} />}
      <h1 className="text-2xl">Products Cart</h1>
      <div className="grid grid-cols-4 gap-2">
        {products.map(product => <ProductCard key={product.id} product={product} onAdd={handleAddToCart} />)}
      </div>
    </div>
  )
}

export default App
