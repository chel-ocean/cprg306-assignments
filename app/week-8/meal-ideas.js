"use client";
import {useState, useEffect} from "react";

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const data = await response.json();
    return data.meals;
}

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div className="bg-yellow-300 flex-initial h-max p-3 rounded-md m-5 w-2/5">
            <h2 className="text-lg font-bold">Meal Ideas:</h2>
            <p>
                {ingredient === null ? `No meals found with ${ingredient}.` :
                ingredient.length > 0 ? `Here are some meal ideas with ${ingredient}:` : 
                `Select an ingredient:`}
            </p>
            <ul className="text-white">
                {meals && meals.length > 0 ? (
                    meals.map((meal) => (
                        <li key={meal.idMeal} className="bg-slate-700 rounded-md p-3 mt-2">{meal.strMeal}</li>
                    ))
                ) : null}
            </ul>
        </div>
    )
}