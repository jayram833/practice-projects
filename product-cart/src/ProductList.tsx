import { memo } from "react"
import ProductItem from "./ProductItem"


type ProductItemProps = {
    name: string,
    price: number,
    id: number
}

type ProductProps = {
    product: ProductItemProps
}

const ProductList = memo(function ({ products, onAddToCart }) {
    return (
        <div>
            <ul className="grid grid-cols-4 gap-2">
                {products.map(item => <ProductItem onAddToCart={onAddToCart} key={item.id} product={item} />)}
            </ul>
        </div>
    )
})

export default ProductList
