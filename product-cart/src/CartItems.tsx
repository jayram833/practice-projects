import { memo } from "react";

const CartItems = memo(function ({ cartItems }) {
    return <div className="absolute right-2 top-30 w-[300px] bg-lime-100 rounded-md p-4 max-h-100 overflow-y-auto">
        <ul>
            {cartItems.map(item => <li key={item.id} className="flex justify-between mt-2 px-3 rounded-sm py-1 bg-white">
                <p>{item.name}</p>
                <h3>{item.quantity}</h3>
            </li>)}
        </ul>
    </div>
})

export default CartItems;