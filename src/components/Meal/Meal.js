import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Meal.css';
const Meal = (props) => {
    const {strMealThumb, strMeal, strArea, strInstructions} = props.meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <div className="meal-info">
                <h2>{strMeal}</h2>
                <p>Country: {strArea}</p>
                <p>{strInstructions.slice(0, 80)}</p>
            </div>
                <button onClick={() => props.handleAddToCart(props.meal)} className='btn-add'>
                    <p>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Meal;