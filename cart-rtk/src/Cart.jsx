import { useSelector } from "react-redux"
import CartItem from "./CartItem";

function Cart() {
    const cartItems = useSelector(state=>state.cart.cartItems);
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center">Cart [{cartItems.length}]</h1>

            <ul className="w-[500px] border-[1px] p-3 h-[400px] overflow-y-scroll">
                {cartItems.map(item=> <CartItem key={item.id} item={item}/>)}
            </ul>

        </div>
    )
}

export default Cart
