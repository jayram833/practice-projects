import { useState } from "react";

function App() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "T-shirt",
      variants: [
        { id: 1, color: "Red", quantity: 2, price: 20 },
        { id: 2, color: "Blue", quantity: 1, price: 22 },
      ],
    },
    {
      id: 2,
      name: "Shoes",
      variants: [
        { id: 1, color: "Black", quantity: 1, price: 50 },
      ],
    },
  ]);

  function increaseQuantity(productID, variantID) {
    setCart(cartItems => cartItems.map(item => item.id === productID ? { ...item, variants: item.variants.map(i => i.id === variantID ? { ...i, quantity: i.quantity + 1 } : i) } : item))
  }
  function removeVariant(productID, variantID) {
    setCart(cartItems => cartItems.map(item => item.id === productID ? { ...item, variants: item.variants.map(i => i.id === variantID ? { ...i, quantity: i.quantity - 1 } : i) } : item))
  }


  function addVariant() { }

  function removeProduct() { }

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Shopping Cart</h1>
      {cart.map((product) => (
        <div key={product.id} style={styles.productCard}>
          <h2>{product.name}</h2>

          {product.variants.map((variant) => (
            <div key={variant.id} style={styles.variantCard}>
              <p>
                <strong>Color:</strong> {variant.color}
              </p>
              <p>
                <strong>Quantity:</strong> {variant.quantity}
              </p>
              <p>
                <strong>Price:</strong> ${variant.price}
              </p>

              <button onClick={() => increaseQuantity(product.id, variant.id)}>
                ➕ Increase Quantity
              </button>
              <button onClick={() => removeVariant(product.id, variant.id)}>
                ❌ Remove Variant
              </button>
            </div>
          ))}

          <button onClick={() => addVariant(product.id)}>
            ➕ Add New Variant
          </button>
          <button onClick={() => removeProduct(product.id)}>
            ❌ Remove Product
          </button>
        </div>
      ))}
    </div>
  )
}

export default App
const styles = {
  productCard: {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "8px",
  },
  variantCard: {
    border: "1px solid #ddd",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
  },
};