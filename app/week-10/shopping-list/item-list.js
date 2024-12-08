"use client";
import Item from "./item";
import {useState} from "react";

export default function ItemList({items, onDelete, onItemSelect}){
  const [sortBy, setSortBy] = useState("name");
  
  if (sortBy === "name"){
    items.sort((a,b) =>  a.name.localeCompare(b.name));
  }
  else if (sortBy === "category"){
    items.sort((a,b) => a.category.localeCompare(b.category));
  }

  const handleClick = (sortBy) => {
    if (sortBy === "name"){
      setSortBy("category");
    }
    else {
      setSortBy("name");
    }
    return;
  }
  return (
    <main className="mt-3">
      <div>
        <button onClick={() => handleClick(sortBy)} 
          className={`rounded-md p-2 m-2 text-black ${sortBy === "name" ? "bg-purple-200" : "bg-green-300"}`}>Sort by {sortBy}</button>
      </div>
        <ul>
          {items.map((item) => (
            <Item 
              key={item.id} 
              id={item.id} 
              name={item.name} 
              quantity={item.quantity} 
              category={item.category} 
              onDelete={onDelete}
              onSelect={() => onItemSelect(item)}/>
          ))}
        </ul>
    </main>
  );
}