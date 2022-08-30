import React, {useState} from 'react';
import './App.css';
import {useDispatch} from "react-redux";

import {Navigation} from "./components/Navigation";
import {TodoList} from "./componentProfilePage/TodoList";
import {InputField} from "./componentProfilePage/InputField"
import {addTodo} from "./store/todoSlice";

export const ProfilePage = () => {
    // const [selected, setSelected] = useState(false)
    // const [content, setContent] = useState("")
    //
    // const chBox = ({target: {checked}}) => {
    //     setSelected(checked);
    //     if (checked) {
    //         setContent("Привет мир!")
    //     } else {
    //         setContent("Мир!")
    //     }
    // };
    //
    // return (
    //     <div>
    //         <h1>ProfilePage</h1>
    //         <div style={{padding: "15px", color: "red", backgroundColor: "white"}}>
    //             <label><input type='checkbox' checked={selected} id='one' onChange={chBox}/> Кликни</label>
    //         </div>
    //         <p>{content}</p>
    //         <Navigation/>
    //     </div>
    // );


    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const addTask = () => {
        dispatch(addTodo({text}))
        setText("");
    }


    return (
        <div className='todos'>
            <InputField text={text} handleInput={setText}  handleSubmit={addTask}/>
            <TodoList/>
            <Navigation/>
        </div>
    )

};

