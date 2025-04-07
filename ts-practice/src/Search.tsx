import { useEffect, useState } from "react"
import data from "./MOCK_DATA.json"

type ResultsItem = {
    name: string
}
type ItemProps = {
    item: string
}

function Search() {
    const [inputQuery, setInputQuery] = useState("");
    const [resultItems, setResultItems] = useState<ResultsItem[]>([]);

    function handleSearch(inputQuery: string) {
        if (inputQuery.length <= 2) return;
        const itemsList: ResultsItem[] = data.filter(ele => ele.name.toLowerCase().includes(inputQuery));
        console.log(itemsList)
        setResultItems(itemsList)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearch(inputQuery);
        }, 500);

        return () => clearTimeout(timer);
    }, [inputQuery]);

    return (
        <div className="flex justify-center mt-5 flex-col items-center">
            <div>
                <input value={inputQuery} onChange={e => setInputQuery(e.target.value)} className="px-2 py-1 bg-white rounded-md w-110 focus:outline-none" type="text" placeholder="Search Item" />
            </div>
            <div>
                <ul>
                    {resultItems.map((item, i) => <Item key={i} item={item} />)}
                </ul>
            </div>
        </div>
    )
}





function Item({ item }: ItemProps) {
    return <li className="bg-blue-600 text-white cursor-pointer hover:bg-blue-500 w-110 px-2 border-b-[0.5px] border-blue-100">{item.name}</li>
}

export default Search
