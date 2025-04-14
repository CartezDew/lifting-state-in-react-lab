// src/components/Ingredient/Ingredient.jsx
import React from 'react';

const Ingredient = ({ ingredient, index, handleClick, actionType }) => {
  return (
    <li
      style={{
        backgroundColor: ingredient.color,
        color: 'white',
        padding: '8px',
        margin: '5px 0',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {ingredient.name}
      <button
        onClick={() => handleClick(index !== undefined ? index : ingredient)}
        style={{ marginLeft: '10px' }}
      >
        {actionType === 'add' ? '+' : 'X'}
      </button>
    </li>
  );
};

export default Ingredient;
