// src/components/IngredientList/IngredientList.jsx
import React from 'react';
import Ingredient from '../Ingredient/Ingredient.jsx'; 

const IngredientList = ({ ingredients = [], addToBurger }) => {
  return (
    <ul>
      <h2>Ingredients</h2>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          handleClick={addToBurger}
          actionType="add"
        />
      ))}
    </ul>
  );
};

export default IngredientList;
