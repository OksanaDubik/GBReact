import React from 'react';

export const InputField = ({text, handleInput, handleSubmit}) => {
    return (

            <label>
                <input value={text} placeholder="Список дел" onChange={(e) => handleInput(e.target.value)}/>
                <button onClick={handleSubmit}>Добавить список дел</button>
            </label>

    );
};
