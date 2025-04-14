// src/components/BurgerStack/BurgerStack.jsx
import React from 'react';
import Ingredient from '../Ingredient/Ingredient.jsx'; 

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      <h2>Your Burger</h2>
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            index={index}
            handleClick={removeFromBurger}
            actionType="remove"
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
