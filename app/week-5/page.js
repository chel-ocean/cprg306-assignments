"use client";

import { useState } from "react";
import Item from "../week-3/item";

export default function Page() {
    // week 4:
    let [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };

    // week 5:
    let [name, setName] = useState("");

    let [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        <Item name={name} quantity={quantity} category={category}/>
        console.log(name, quantity, category);
        alert("Name: " + name + ", Quantity: " + quantity + ", Category: " + category);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <div>
            <p className="text-3xl my-10 text-center">Quantity: {quantity}</p>

            <div className="flex flex-row gap-10 mt-10 justify-center">
                <button className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={increment}>Increment</button>
                
                <button className="bg-red-500 text-white py-2 px-4 rounded"
                    onClick={decrement}>Decrement</button>
            </div>

            <form onSubmit={handleSubmit} className="text-center mt-10">
                <input type="text" placeholder="Enter name" value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="border border-purple-400 w-60 h-10 rounded-md" 
                required/>

                <select name="category" className="ml-5 border border-black h-10 rounded-md"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="meat">Meat</option>
                    <option value="frozenFoods">Frozen Foods</option>
                    <option value="cannedGoods">Canned Goods</option>
                    <option value="dryGoods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option> 
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
                <input type="submit" className="px-4 py-2 bg-red-300 rounded-md ml-5"></input>
            </form>
        </div>
    )
}

