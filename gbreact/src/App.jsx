//последнее рабочее
// import React from "react";
// import './App.css';
// import {Form} from "./components/Form";
// import {Route, Routes} from "react-router-dom";
// import {Homepage} from "./Homepage";
// import {ProfilePage} from "./ProfilePage";
// import {Error} from "./Error";
// import {News} from "./components/ListItems/News";
// import {ChatsWeather} from "./components/ListItems/ChatsWeather";
// import {ChatsNature} from "./components/ListItems/ChatsNature";
// import {ChatsPolitics} from "./components/ListItems/ChatsPolitics";
//
//
// export const App = () => {
//
//     return (
//
//         <div className="App">
//
//             <Routes>
//                 <Route path="/" element={<Homepage/>}/>
//                 <Route path="profilePage" element={<ProfilePage/>}/>
//                 <Route path="form" element={<Form/>}/>
//                 <Route path="*" element={<Error/>}/>
//                 <Route path="news" element={<News/>}/>
//                 <Route path="weather" element={<ChatsWeather/>}/>
//                 <Route path="nature" element={<ChatsNature/>}/>
//                 <Route path="politics" element={<ChatsPolitics/>}/>
//
//             </Routes>
//
//         </div>
//     );
// }


import React, {useState} from "react";
import './App.css';
import {Form} from "./components/form/Form";
import {Route, Routes} from "react-router-dom";
import {Homepage} from "./Homepage";
import {ProfilePage} from "./ProfilePage";
import {Error} from "./Error";
import {News} from "./components/ListItems/News";
import {ChatsWeather} from "./components/ListItems/ChatsWeather";
import {ChatsNature} from "./components/ListItems/ChatsNature";
import {ChatsPolitics} from "./components/ListItems/ChatsPolitics";
import {Navigation} from "./components/Navigation";
import {ListItem} from "./components/ListItem";

const initialChats = [
    {
        id: 'default',
        name: "form"
    }
]
const initialMessage = {
    default: [
        {
        id: 1,
        author: "User",
        value: "Hello, User"

    },],
 };

export const App = () => {
    const [chatList, setChatList] = useState(initialChats)
    const [messages, setMessages] = useState(initialMessage)

    return (

        <div className="App">

            <Routes>

                <Route path="/" element={<Navigation/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="profilePage" element={<ProfilePage/>}/>
                    <Route path="*" element={<Error/>}/>
                    <Route path="form">
                        <Route index element={<ListItem chatList={chatList} onAddChat={setChatList}/>}/>
                        <Route path=":chatId"
                               element={<Form
                                   messages={messages}
                                   setMessages={setMessages}
                                   chatList={chatList}
                                   onAddChat={setChatList}
                               />
                               }
                        />
                    </Route>

                    <Route path="news" element={<News/>}/>
                    <Route path="weather" element={<ChatsWeather/>}/>
                    <Route path="nature" element={<ChatsNature/>}/>
                    <Route path="politics" element={<ChatsPolitics/>}/>
                </Route>
            </Routes>

        </div>
    );
}




