// import React from 'react';
// import List from '@mui/material/List';
// import ListItems from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import {Link} from "react-router-dom";
//
// export const ListItem = (props) => {
//
//     return (
//         <>
//             <List sx={{
//                 width: '30%',
//                 maxWidth: 360,
//                 backgroundColor: "#172674",
//                 margin: "20px 0 0 20px",
//                 paddingLeft: "15px",
//                 color: "white"
//             }}>
//                 {[{"Новости": "../news"},
//                     {Погода: "../weather"},
//                     {Природа: "../nature"},
//                     {Политика: "../politics"}].map((value, ind) => {
//                     const labelId = `checkbox-list-label-${value}`;
//                     const myValue = Object.values(value)[0]
// console.log(ind, myValue)
//                     return (
//                         <Link   key={ind} className="links" to={`${myValue}`}>
//                             <ListItems key={value} disablePadding>
//                                 <ListItemText style={{color: "white"}} id={labelId}
//                                               primary={`Тема чата:   ${Object.keys(value)}`}/>
//                             </ListItems>
//                         </Link>
//                     );
//                 })}
//             </List>
//
//         </>
//     );
// }
//
//
//
//


import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItems from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";

export const ListItem = ({messageSet}) => {

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

                {[{name:"Новости", path: "../news", messageSet: {messageSet}},
                    {name: "Погода", path: "../weather", messageSet: {messageSet}},
                    {name: "Природа", path: "../nature", messageSet: {messageSet}},
                    {name: "Политика",path: "../politics", messageSet: {messageSet}}].map((value, ind) =>



                {
                    const labelId = `checkbox-list-label-${value}`;
                    const myMessage = Object.values(value)[2]
                    console.log(myMessage)
                    const paths= Object.values(value)[1]
                    console.log(paths)
                    const myValue = Object.values(value)[0]
                    console.log(ind, myValue)
                    console.log(value)
                    return (
                        <Link   key={ind} className="links" to={`${paths}`}>
                            <ListItems key={value} disablePadding>
                                <ListItemText style={{color: "white"}} id={labelId}
                                              primary={`Тема чата:   ${myValue}`}/>
                            </ListItems>
                        </Link>

              );

            }
            ) }

            </List>

        </>
    );
}//I


// import React, {useState} from 'react';
// import List from '@mui/material/List';
// import ListItems from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import {Link, Route, Routes} from "react-router-dom";
// import {News} from "./ListItems/News";
// import {ChatsWeather} from "./ListItems/ChatsWeather";
// import {ChatsNature} from "./ListItems/ChatsNature";
// import {ChatsPolitics} from "./ListItems/ChatsPolitics";
// // import state from "../redux/state";
//
// export const ListItem = ({posts}) => {
//
//
//    //  ({ posts}).posts.map((el)=> {
//    //
//    //     console.log(el.name)
//    // })
//
//
//
//     return (
//         <>
//             <List sx={{
//                 width: '30%',
//                 maxWidth: 360,
//                 backgroundColor: "#172674",
//                 margin: "20px 0 0 20px",
//                 paddingLeft: "15px",
//                color: "white"
//            }}>
//                {({ posts}).posts.map((value, ind) =>
//                {
//                    const labelId = `checkbox-list-label-${value}`;
//
//                const paths=value.path
//                console.log(paths)
//                 const myValue = value.name
//                     console.log(ind, myValue)
//                      console.log()
//                      return (
//                          <Link   key={ind} className="links" to={`${value.path}`}>
//                              <ListItems key={value.path} disablePadding>
//                                  <ListItemText style={{color: "white"}} id={labelId}
//                                                primary={`Тема чата:   ${myValue}`}/>
//                              </ListItems>
//                          </Link>
//                );
//              }
//              ) }
//              </List>
//          </>
//      );
// }


