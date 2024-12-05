"use client";
import ItemList from "./item-list.js";
import Item from "./item.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas.js";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleDelete = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    }

    const handleItemSelect = (item) => {
        const cleanedName = item.name
        .split(",")[0]
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "")
        .trim()
        .toLowerCase();
        setSelectedItemName(cleanedName);
    }

    return(
        <main>
            <h1 className="text-2xl font-bold y-2 ml-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <div className="flex justify-center">
                <ItemList items={items} onDelete={handleDelete} onItemSelect={handleItemSelect}/>
                <MealIdeas ingredient={selectedItemName}/>
            </div>
            
        </main>
    )
}