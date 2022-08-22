import React from 'react';
import Buttons from '@mui/material/Button';

export const Button = (props) => {
    return (

        <Buttons
style={{
    backgroundColor: "#172674"
}}
            sx={{
            backgroundColor: "#172674",
            outline: "1px solid ghostwhite"
        }} variant="contained" className='btn' onClick={props.onClick}>{props.name}
        </Buttons>
    );
}
