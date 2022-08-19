import React, {useState, useEffect} from 'react';
import {Input} from "./Input";
import {Button} from "./Button";
import '../App.css';
import {Textarea} from "./Textarea";

export const Form = () => {
    const [value, setValue] = useState('')
    const [author, setAuthor] = useState('')
    const [messages, setMessages] = useState([])

    const name = 'отправить'
    const placeholderText = 'можешь написать свой текст'
    const placeholderAuthor = 'можешь представиться, если захочешь'

    const createClick = () => {
        setMessages(pervstate => [...pervstate, {value: value}, {author: author}])
        setAuthor('')
        setValue('')
    }

    const creatChange = (ev) => {
        setValue(ev.target.value)
    }

    const creatChangeTwo = (eve) => {
        setAuthor(eve.target.value)
    }


    useEffect(() => {

        setTimeout(() => {
            if (messages.length > 0 && messages[messages.length - 1]?.author !== "bot") {

                if (messages[messages.length - 1]?.author !== "") {
                    setMessages(prevState => [...prevState, {value: "Ответ робота", author: "bot"}])
                }
            }
        }, 2500)
    }, [messages])

    return <div className='form'>

        <ul>
            {messages.map((message, ind) =>
                <li key={ind} className='list'>
                    {message.value}
                </li>
            )}
        </ul>
        <div className='form-input'>
            <Textarea className='input textarea' change={creatChange} value={value} placeholder={placeholderText}/>
            <Input className='input' change={creatChangeTwo} value={author} placeholder={placeholderAuthor}/>
            <Button className='btn' name={name} onClick={createClick}/>
        </div>
    </div>
}










