import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect( () =>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    const [meal, setMeal] = useState([]);

    const handleAddToCart = (product) =>{
        const newMeal = [...meal, product];
        setMeal(newMeal)
    }

    return (
        <div className='meals-section'>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal meal={meal} key={meal.idMeal} handleAddToCart={handleAddToCart}></Meal>)
                }
                {/* {
                    meals.map(meal => console.log(meal))
                } */}
            </div>
            <div className="cart-container">
                <h3><Cart cart={meal}></Cart></h3>
            </div>
        </div>
    );
};

export default Meals;