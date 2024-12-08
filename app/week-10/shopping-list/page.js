"use client";
import ItemList from "./item-list.js";
import Item from "./item.js";
import NewItem from "./new-item.js";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas.js";
import {useUserAuth} from "../_utils/auth-context.js";
import Link from "next/link";
import {getItems, addItem} from "../_services/shopping-list-service.js";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = async (newItem) => {
        try {
            if (user) {
                const itemID = await addItem(user.uid, newItem);
                setItems([...items, {id: itemID, ...newItem}]);
            } else {
                return;
            }
        } catch (error) {
            console.error("Error adding item:", error);
        }
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

    const {user} = useUserAuth();
    if (!user) {
        return (
            <main className="flex h-screen">
                <div className="m-auto text-center">
                    <p>This is a secure page. You must login first.</p>
                    <Link className="text-blue-600" href="/week-9">Return to Login Page</Link>
                </div>
                
            </main>
        )
    }

    const loadItems = async () => {
        if (!user) return;
        try {
            const items = await getItems(user.uid);
            setItems(items);
        } catch (error) {
            console.error("Error loading items:", error);
        }
    }

    useEffect(() => {
        if (user){
            loadItems();
        }
        else {
            return;
        }
    }, [user]);

    return(
        <main>
            <div className="y-2 ml-2">
                <h1 className="text-2xl font-bold">Shopping List</h1>
                <p>You have successfully logged in.</p>
                <Link className="text-blue-600 hover:text-blue-400" href="/week-9">Return to Login Page</Link>
            </div>
            
            <NewItem onAddItem={handleAddItem}/>
            <div className="flex justify-center">
                <ItemList items={items} onDelete={handleDelete} onItemSelect={handleItemSelect}/>
                <MealIdeas ingredient={selectedItemName}/>
            </div>
        </main>
    )
}