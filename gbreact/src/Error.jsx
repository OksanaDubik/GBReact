import React from 'react';
import './App.css';
import {Navigation} from "./components/Navigation";

export const Error = () => {
    return (
        <>
            <Navigation/>
            <h1>404</h1>
            <p>Вы перешли на несуществующую страницу.</p>
        </>


    );
}