import React from "react";
import './App.css';
import {Message} from "./Message";
import {Form} from "./components/Form";

export const App = () => {
    const text = "Я создал первый компонент"
    return (
        <div className="App">
            <Message text={text}/>
            <Form/>
        </div>
    );
}


