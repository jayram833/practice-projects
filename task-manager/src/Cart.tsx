function Cart({cart,onDelete}) {
    return (
        <div className="absolute w-xs top-15 px-4 overflow-y-auto h-100 max-h-100 py-3 text-xs right-5 rounded-md bg-lime-50">
            <ul >
                {cart.map(item=><li  key={item.id} className="bg-lime-200 rounded-md m-1 flex justify-between items-center px-2 py-1.5">
                    <span>{item.title}</span>
                    <span>{item.quantity}</span>
                    <button onClick={()=>onDelete(item.id)} className="bg-red-500 px-2 py-1 text-white cursor-pointer rounded-md hover:bg-red-600">Remove</button>
                </li>)}
            </ul>
        </div>
    )
}

export default Cart
