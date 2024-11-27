"use client";
import ItemList from "./item-list.js";
import Item from "./item.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleDelete = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    }

    return(
        <main>
            <h1 className="text-2xl font-bold y-2 ml-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onDelete={handleDelete}/>
        </main>
    )
}