import ItemList from "./item-list.js";
import Item from "./item.js";

export default function Page(){
    return(
        <main>
            <h1 className="text-2xl font-bold y-2 ml-2">Shopping List</h1>
            <ItemList />
        </main>
    )
}