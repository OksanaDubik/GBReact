import React, {useState, useEffect} from 'react';
import {Input} from "./Input";
import {Button} from "./Button";
import {Textarea} from "./Textarea";
import {ListItem} from "./ListItem";

import {nanoid} from 'nanoid'
import '../App.css';

export const Form = () => {
    const [value, setValue] = useState('')
    const [author, setAuthor] = useState('')
    const [messages, setMessages] = useState([])

    const name = 'отправить'
    const placeholderText = 'Твой текст'
    const placeholderAuthor = 'Твоё имя'
    const inputElement = React.createRef();


    const createClick = () => {
        setMessages(pervstate => [...pervstate, {id: nanoid(5)}, {value: value}, {author: author}])
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
                    setMessages(prevState => [...prevState, {id: nanoid(5), value: "Ответ робота: ", author: "bot"}])
                }
            }
        }, 2500)
        inputElement.current.focus();

    }, [messages])

    return <div className='form'>
        <ListItem author={messages.author} messages={messages}/>
        <div className='list-mess'>
            {messages.map((message, id) =>
                <h3 key={id}>{message.value}
                    {message.author} </h3>
            )}
        </div>
        <div className='form-input'>
            <Textarea inputRef={inputElement} className='textarea' change={creatChange} value={value}
                      placeholder={placeholderText}/>
            <Input className='input' change={creatChangeTwo} value={author} placeholder={placeholderAuthor}/>
            <Button className='btn' name={name} onClick={createClick}/>
        </div>
    </div>
}










