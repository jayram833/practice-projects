import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    window.api.getProducts().then(setProducts);
  }, []);

  const addProduct = async () => {
    if (!name || !price) return alert('Please fill in both fields');
    const updatedProducts = await window.api.addProduct({ name, price: parseFloat(price) });
    setProducts(updatedProducts);
    setName('');
    setPrice('');
  };
  const handleDelete = async function (id) {
    const updatedProducts = await window.api.deleteProduct(id);
    setProducts(updatedProducts);
  }
  return (
    <div>
      <h1>Products</h1>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <button onClick={addProduct} className='bg-lime-300 rounded-sm px-2 py-1 focus:outline-none cursor-pointer'>Add Product</button>
      <h1 className='font-semibold text-4xl'>Products List</h1>
      <ul className='w-[200px]'>
        {products.map(p => (
          <li key={p.id} className=' flex justify-between mt-1 bg-indigo-600 text-white px-2 py-1 rounded-md'>
            <p>{p.name} - ₹{p.price}</p>
            <button onClick={() => handleDelete(p.id)} className='cursor-pointer'>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
