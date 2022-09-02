import React from 'react';
import {Form} from "../Form";
import {useNavigate} from 'react-router'

import Buttons from '@mui/material/Button';

export const News = () => {
    const hist = useNavigate();

    return (
        <div>
            <h1>News</h1>

            <Form/>
            <Buttons style={{
                backgroundColor: "#172674"
            }}
                     sx={{
                         backgroundColor: "#172674",
                         outline: "1px solid ghostwhite"
                     }} variant="contained" onClick={() => hist(-1)}>Go Back
            </Buttons>
        </div>
    );
};