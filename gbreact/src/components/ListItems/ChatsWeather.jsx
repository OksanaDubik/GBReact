import React from 'react';
import {useNavigate} from 'react-router'

import Buttons from '@mui/material/Button';
import {Form} from "../form/Form";

export const ChatsWeather = () => {
    const hist = useNavigate();

    return (
        <div>
            <h1>ChatsWeather</h1>
            <Form />
            <Buttons style={{
                backgroundColor: "#172674"
            }}
                     sx={{
                         backgroundColor: "#172674",
                         outline: "1px solid ghostwhite"
                     }} variant="contained"  onClick={() => hist(-1)}>Go Back
            </Buttons>
        </div>
    );
};

