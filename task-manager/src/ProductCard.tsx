import { FC } from "react"

interface Product {
    id: number;
    title: string;
    images: string[];
    price: number;
}

interface ProductCardProps {
    product: Product;
    onAdd: (product: Product) => void;  // Function type that takes a Product and returns void
}

const ProductCard:FC<ProductCardProps> = function({product:{id, title, images, price} ,onAdd}) {
    return (
        <div className="bg-gray-200 rounded-md py-2 flex flex-col items-center">
            <div className="flex justify-center w-full">
                <img src={images[0]} alt="product image" loading="lazy" className="w-30" />
            </div>
            <div className="flex flex-col items-start w-full px-4">
                <p>{title}</p>
                <p>₹{price}</p>
                <button onClick={()=>onAdd({id, title, images, price})} className="cursor-pointer bg-blue-500 px-2 py-1 rounded-md text-white hover:bg-blue-600">Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard
