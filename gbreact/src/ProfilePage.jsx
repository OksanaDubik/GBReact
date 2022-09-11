import React, {useState, useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

import {TodoList} from "./componentProfilePage/TodoList";
import {InputField} from "./componentProfilePage/InputField"
import {addTodo} from "./store/todoSlice";

export const ProfilePage = () => {


    const [text, setText] = useState('')
    const {status, error} = useSelector((state => state.todos))
    const dispatch = useDispatch()
    const addTask = () => {
        if (text.trim().length) {
            dispatch(addTodo({text}))
            setText("");
        }
    }

    return (

        <div className='todos'>
            <h1>Profile</h1>
            <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
            {status === "loading" && <h2>Loading...</h2>}
            {error && <h2>Error {error}</h2>}
            <TodoList/>

        </div>
    )

}

