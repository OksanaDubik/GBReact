import React from 'react';
import {Link} from "react-router-dom";
import {Message} from "../Message";

export const Navigation=()=>{
    const text = "Я создал первый компонент"
    return(
        <>
            <nav className="links">
                <Link to="/">Homepage</Link>
                <Link to="/profilePage">ProfilePage</Link>
                <Link to="/form">Form</Link>
            </nav>
            <Message text={text}/>
        </>
    )
}

