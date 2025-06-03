import { memo } from "react";
import { MdDeleteForever } from "react-icons/md";

const CartItems = memo(function ({ cartItems, setCartItems }) {
    let cartTotal = cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

    function updatedQuantity(id, delta) {
        const updatedCart = cartItems.map(item =>
            item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + delta,
                    totalPrice: (item.quantity + delta) * item.price,
                }
                : item
        );
        setCartItems(updatedCart)
    }

    function decreaseQuantity(id) {
        updatedQuantity(id, -1)
    }

    function increaseQuantity(id) {
        updatedQuantity(id, 1)
    }

    function handleDelete(id) {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    return <div className="absolute right-2 top-40 w-[400px] bg-lime-100 rounded-md p-4 max-h-100 overflow-y-auto">
        <div className="py-5 flex justify-between font-semibold">
            <p>Cart Total: </p>
            <p>₹{cartTotal}</p>
        </div>
        <ul>
            {cartItems.map(item => <CartItem item={item} key={item.id} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} onDelete={handleDelete} />)}
        </ul>
    </div >
})

function CartItem({ item, onIncrease, onDecrease, onDelete }) {
    return <li key={item.id} className="flex justify-between mt-2 px-3 rounded-sm py-2 bg-white">
        <p>{item.name}</p>
        <span className="flex gap-3 items-center">
            <button onClick={() => onDecrease(item.id)} className={`cursor-pointer rounded-2xl py-1 px-3 ${item.quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-lime-200'}`} disabled={item.quantity === 1}> -</button>
            <h3>{item.quantity}</h3>
            <Button label="+" onClick={() => onIncrease(item.id)} />
            <p>₹{item.price * item.quantity}</p>
            <Button label={<MdDeleteForever className="text-red-600" />} onClick={() => onDelete(item.id)} />
        </span>
    </li>
}

function Button({ label, onClick }) {
    const isIcon = typeof label !== 'string';
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer rounded-2xl py-1 px-3 ${isIcon ? "text-2xl" : "bg-lime-200"}`}
        >
            {label}
        </button>
    );
}

export default CartItems;