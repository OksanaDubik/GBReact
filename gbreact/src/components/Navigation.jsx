import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import '../App.css'

const navigate = [
    {
        id: 1,
        to: '/',
        name: 'Homepage'
    },
    {
        id: 2,
        to: '/profilePage',
        name: 'ProfilePage'
    },
    {
        id: 3,
        to: '/form',
        name: 'Form'
    }
]

export const Navigation = () => {

    return (
        <>
            <h1>Я создал первый компонент</h1>
            <ul className="links">
                {navigate.map((link, i) =>
                    <li className="links" key={link.id}>
                        <NavLink to={link.to}
                                 style={({isActive}) => ({color: isActive ? 'yellow' : 'white'})}
                        >{link.name}
                        </NavLink>
                    </li>
                )}
            </ul>

            <div>
                <Outlet/>
            </div>
        </>
    )
}

