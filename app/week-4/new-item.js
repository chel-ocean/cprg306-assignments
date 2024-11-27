"use client";

import { useState } from "react";

export default function NewItem() {
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

    return (
        <div>
            <p className="text-3xl my-10 text-center">Quantity: {quantity}</p>

            <div className="flex flex-row gap-10 mt-20 justify-center">
                <button className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={increment}>Increment</button>
                
                <button className="bg-red-500 text-white py-2 px-4 rounded"
                    onClick={decrement}>Decrement</button>
            </div>
            
        </div>
    )
}

