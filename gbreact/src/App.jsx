import React from "react";
import './App.css';
import {Form} from "./components/Form";
import {Route, Routes, Redirect, BrowserRouter} from "react-router-dom";
import {Homepage} from "./Homepage";
import {ProfilePage} from "./ProfilePage";
import {Error} from "./Error";
import {News} from "./components/ListItems/News";
import {ChatsWeather} from "./components/ListItems/ChatsWeather";
import {ChatsNature} from "./components/ListItems/ChatsNature";
import {ChatsPolitics} from "./components/ListItems/ChatsPolitics";


export const App = () => {

    return (

        <div className="App">

            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="profilePage" element={<ProfilePage/>}/>
                <Route path="form" element={<Form/>}/>
                <Route path="*" element={<Error/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="weather" element={<ChatsWeather/>}/>
                <Route path="nature" element={<ChatsNature/>}/>
                <Route path="politics" element={<ChatsPolitics/>}/>

            </Routes>

        </div>
    );
}


