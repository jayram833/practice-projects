function Cart({ cartItems, onSetShowCart }) {

    function handleCart() {
        onSetShowCart(prev => prev === false ? true : false)
    }

    return (
        <div>
            <button onClick={handleCart} className="bg-lime-200 px-2 py-1 cursor-pointer rounded-md">Cart [{cartItems.length}]</button>
        </div>
    )
}


export default Cart
