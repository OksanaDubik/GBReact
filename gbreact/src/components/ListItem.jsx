//последняя забочая версия
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
import List from '@mui/material/List';
import ListItems from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Link, Route, Routes} from "react-router-dom";
import Buttons from '@mui/material/Button';

export const ListItem = ({messageSet}) => {

    const [posts, setPosts] = useState([
        {id: 1, name: "Новости", path: "/news", messageSet: {messageSet}, element: "<News/>"},
        {id: 2, name: "Погода", path: "/weather", messageSet: {messageSet}, element: "<ChatsWeather/>"},
        {id: 3, name: "Природа", path: "/nature", messageSet: {messageSet}, element: "<ChatsNature/>"},
        {id: 4, name: "Политика", path: "/politics", messageSet: {messageSet}, element: "<ChatsPolitics/>"}
    ])

    const [name, setName] = useState("")

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            name,
            path: "",
            messageSet,
            element: ""
        }
        setPosts([...posts, newPost])
        setName("")
    }

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
                <p>Тема чата:</p>
                {posts.map((value, ind) => {
                        const labelId = `checkbox-list-label-${value}`;
                        const myMessage = value.messageSet
                        const paths = value.path
                        const myValue = value.name
                        const myId = value.id
                        const removePost = () => {
                            setPosts(posts.filter(p => p.id !== myId))
                        }
                        return (
                            <>
                                <div style={{padding: "5px", display: 'flex', justifyContent: "space-between"}}>
                                    <Link key={ind} className="links" to={`${paths}`}>
                                        <ListItems key={value} disablePadding>
                                            <ListItemText style={{color: "white"}} id={labelId}
                                                          primary={` ${myValue}`}/>
                                        </ListItems>
                                    </Link>
                                    <Buttons style={{
                                        fontSize: "15px",
                                        backgroundColor: "#172674"
                                    }}
                                             sx={{
                                                 backgroundColor: "#172674",
                                                 outline: "1px solid ghostwhite"
                                             }} variant="contained" onClick={removePost}>удалить чат</Buttons>
                                </div>
                            </>
                        );
                    }
                )}
                <div style={{padding: "5px", display: 'flex', justifyContent: "space-between"}}>
                    <input
                        style={{padding: "5px", margin: "0 5px"}}
                        className="input" type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder='Название поста'
                    />
                    <Buttons
                        style={{
                            padding: "5px",
                            fontSize: "15px",
                            backgroundColor: "#172674"
                        }}
                        sx={{
                            backgroundColor: "#172674",
                            outline: "1px solid ghostwhite"
                        }}
                        variant="contained"
                        onClick={addNewPost}>
                        Создать чат
                    </Buttons>
                </div>
            </List>
        </>
    );
}

