//последняя рабочая версия
// import React, {useState} from 'react';
// import List from '@mui/material/List';
// import ListItems from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import {Link, Route, Routes} from "react-router-dom";
//
// export const ListItem = ({messageSet}) => {
//
//     return (
//
//
//         <>
//             <List sx={{
//                 width: '30%',
//                 maxWidth: 360,
//                 backgroundColor: "#172674",
//                 margin: "20px 0 0 20px",
//                 paddingLeft: "15px",
//                 color: "white"
//             }}>
//
//                 {[{name:"Новости", path: "/news", messageSet: {messageSet}, element:"<News/>"},
//                     {name: "Погода", path: "/weather", messageSet: {messageSet}, element:"<ChatsWeather/>" },
//                     {name: "Природа", path: "/nature", messageSet: {messageSet}, element:"<ChatsNature/>"},
//                     {name: "Политика",path: "/politics", messageSet: {messageSet}, element:"<ChatsPolitics/>"}].map((value, ind) =>
//
//
//
//                     {
//                         const elementRout=Object.values(value)[3]
//                         const labelId = `checkbox-list-label-${value}`;
//                         const myMessage = Object.values(value)[2]
//                         const paths= Object.values(value)[1]
//                         const myValue = Object.values(value)[0]
//                         console.groupCollapsed(`${elementRout}`, myMessage.messageSet, paths)
//                         console.log(ind, myValue)
//                         console.log(value)
//                         console.groupEnd()
//
//                         return (<>
//                             <Link   key={ind} className="links" to={`${paths}`}>
//                                 <ListItems key={value} disablePadding>
//                                     <ListItemText style={{color: "white"}} id={labelId}
//                                                   primary={`Тема чата:   ${myValue}`}/>
//                                 </ListItems>
//                             </Link>
//
//                             </>
//
//                         );
//
//                     }
//                 ) }
//
//             </List>
//
//         </>
//     );
// }


import React, {useState} from "react";
import {Link} from "react-router-dom";
import {nanoid} from "@reduxjs/toolkit";


export const ListItem = ({chatList, onAddChat}) => {
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            onAddChat([
                ...chatList,
                {
                    id: nanoid(5),
                    name: name,
                },
            ]);
            setName("")
        }
    }

    return (
        <>
            <ul>
                {chatList.map((chat) => (
                    <li key={chat.id}>
                        <Link to={`/form/${chat.id}`}>{chat.name}</Link>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type='text'
                       value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <button type="submit">add chat</button>
            </form>
        </>
    )
}

