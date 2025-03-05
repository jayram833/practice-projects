function Product({ product: { name, id, image, price, rating: { rate, count } } }) {
    return (
        <div className="flex rounded-2xl justify-center transform-all duration-300 flex-col dark:bg-gray-800 dark:shadow-slate-600/10  dark:text-gray-100 shadow-xl shadow-slate-300/40 p-5 hover:shadow-slate-400/50 ">
            <img src={image} alt={name} className="w-20 md:w-25 lg:w-30 pb-5 self-center" loading="lazy" />
            <p>{name}</p>
            <p>Rating: {rate} ({count})</p>
            <h3 className="font-semibold">₨. {price}</h3>
            <button className="bg-blue-500 transform-all duration-300 mt-auto text-white py-2 rounded-xl hover:bg-blue-600 cursor-pointer">Buy Now</button>
        </div>
    )
}

export default Product
