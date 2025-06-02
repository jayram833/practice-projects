
type ProductItemProps = {
    name: string,
    price: number,
    id: number
}

type ProductProps = {
    product: ProductItemProps,
    onAddToCart: (product: ProductItemProps) => void
}

function ProductItem({ product, onAddToCart }: ProductProps) {
    return (
        <li className="border-[0.5px] rounded-md py-5 flex flex-col items-center gap-3">

            <h3 className="font-semibold text-sm">{product.name}</h3>
            <p className="text-2xl">₹{product.price}</p>
            <button onClick={() => onAddToCart(product)} className="bg-yellow-500 px-4 py-1 rounded-sm text-[12px] cursor-pointer">Add to Cart</button>
        </li>
    )
}




export default ProductItem
