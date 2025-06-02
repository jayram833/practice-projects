import { memo } from "react";
import { MdDeleteForever } from "react-icons/md";

const CartItems = memo(function ({ cartItems, setCartItems }) {

    function decreaseQuantity(id) {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
    }
    function increaseQuantity(id) {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    }

    function handleDelete(id) {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    return <div className="absolute right-2 top-40 w-[300px] bg-lime-100 rounded-md p-4 max-h-100 overflow-y-auto">
        <ul>
            {cartItems.map(item => <li key={item.id} className="flex justify-between mt-2 px-3 rounded-sm py-2 bg-white">
                <p>{item.name}</p>
                <span className="flex gap-3 items-center">
                    <button onClick={() => decreaseQuantity(item.id)} className={`cursor-pointer rounded-sm py-1 px-3 ${item.quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-lime-200'}`} disabled={item.quantity === 1}> -</button>
                    <h3>{item.quantity}</h3>
                    <Button label="+" onClick={() => increaseQuantity(item.id)} />
                    <Button label={<MdDeleteForever className="text-red-600" />} onClick={() => handleDelete(item.id)} />
                </span>
            </li>)}
        </ul>
    </div >
})


function Button({ label, onClick }) {
    return <button onClick={onClick} className={`cursor-pointer rounded-sm py-1 px-3 ${label !== "+" && label !== "-" ? " text-2xl py-1" : "bg-lime-200"}`}>{label}</button>
}
export default CartItems;