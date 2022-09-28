import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let id;
    let name;
    for(const singleCart of cart){
        id = singleCart.idMeal;
        name = singleCart.strMeal;
    }
    
    return (
        <div className='single-cart'>
            <h3>Cart info</h3>
            <div className="info">
                <p>ID: {id}</p>
                <p>Name: {name}</p>
            </div>
        </div>
    );
};

export default Cart;