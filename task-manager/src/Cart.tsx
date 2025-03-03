import { useEffect, useRef } from "react"

function Cart({ cart, setIsCartOpen, onDelete }) {
    const cartRef = useRef(null);


    function handleClickOutside(e: MouseEvent) {
        if (cartRef.current && !cartRef.current.contains(e.target)) {
            setIsCartOpen(false)
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])


    return (
        <div ref={cartRef} className="absolute w-xs top-15 px-4 overflow-y-auto h-100 max-h-100 py-3 text-xs right-5 rounded-md bg-lime-50">
            {!cart.length ? <p className="text-lg text-center">Your shopping Cart is empty</p> :
                <ul >
                    {cart.map(item => <li key={item.id} className="bg-lime-200 rounded-md m-1 flex justify-between items-center px-2 py-1.5">
                        <span>{item.title}</span>
                        <span>{item.quantity}</span>
                        <button onClick={() => onDelete(item.id)} className="bg-red-500 px-2 py-1 text-white cursor-pointer rounded-md hover:bg-red-600">Remove</button>
                    </li>)}
                </ul>
            }
        </div>
    )
}

export default Cart
