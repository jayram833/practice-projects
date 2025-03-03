import { useEffect, useState } from "react";


interface Products{
    id:number,
    title:string,
    images:string[],
    price:number,
}

export default function useProducts(url:string){
    const [products, setProducts] = useState<Products[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)

    async function getProducts(){
        try{
            const response  = await fetch(url);
            if(!response.ok){
                throw new Error("HTTP Error")
            }
            setLoading(false)
            const data:Products[] = await response.json();
            setProducts(data)
        }catch(e){
            if (e instanceof Error) {
                setError(e.message);
                console.error(e.message);
            } else {
                setError("Unknown error occurred");
            }
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getProducts();
    },[url])
    return {products, error,loading};
}