import React from 'react';
import List from '@mui/material/List';
import ListItems from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Link, Route, Routes, BrowserRouter, Router} from "react-router-dom";

export const ListItem = () => {

    return (
        <>
            <List sx={{
                width: '30%',
                maxWidth: 360,
                backgroundColor: "#172674",
                margin: "20px 0 0 20px",
                paddingLeft: "15px",
                color: "white"
            }}>
                {[{Новости: "../news"},
                    {Погода: "../weather"},
                    {Природа: "../nature"},
                    {Политика: "../politics"}].map((value, ind) => {
                    const labelId = `checkbox-list-label-${value}`;
                    const myValue = Object.values(value)[0]

                    return (
                        <Link   key={ind} className="links" to={`${myValue}`}>
                            <ListItems key={value} disablePadding>
                                <ListItemText style={{color: "white"}} id={labelId}
                                              primary={`Тема чата:   ${Object.keys(value)}`}/>
                            </ListItems>
                        </Link>
                    );
                })}
            </List>

        </>
    );
}




