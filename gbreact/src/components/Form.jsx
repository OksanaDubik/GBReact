import React, {useState, useEffect} from 'react';
import {Input} from "./Input";
import {Button} from "./Button";
import '../App.css';
import {Textarea} from "./Textarea";

export const Form = () => {
    const [value, setValue] = useState('')
    const [author, setAuthor] = useState('')
    const [messages, setMessages] = useState([])
    const [answer, setAnswer] = useState('')


    const name = 'отправить'
    const placeholderText = 'можешь написать свой текст'
    const placeholderAuthor = 'можешь представиться, если захочешь'

    const createClick = () => {
        setMessages([...messages, value, author])
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
        let timeout = setTimeout(() => {
            setMessages([...messages, value, author, answer])
            setAuthor('')
            setValue('')
            setAnswer("Оставь меня, сегодня я в печали")
        }, 1500)
        return () => clearTimeout(timeout)
    }, [author])

    return <div className='form'>

        <ul>
            {messages.map((message, ind) =>
                <li key={ind} className='list'>
                    {message}
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

