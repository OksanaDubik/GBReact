// import React, {useState, useEffect} from 'react';
// import {Input} from "./Input";
// import {Button} from "./Button";
// import {Textarea} from "./Textarea";
// import {ListItem} from "./ListItem";
// import {Navigation} from "./Navigation";
//
// import {nanoid} from 'nanoid'
// import '../App.css';
// // import {News} from "./ListItems/News";
//
// export const Form = () => {
//     const [value, setValue] = useState('')
//     const [author, setAuthor] = useState('')
//     const [messages, setMessages] = useState([])
//
// const a=messages
//     console.log(a)
//     const name = 'отправить'
//     const placeholderText = 'Твой текст'
//     const placeholderAuthor = 'Твоё имя'
//     const inputElement = React.createRef();
//
//     const createClick = () => {
//         setMessages(pervstate => [...pervstate, {id: nanoid(5), value: value + " ", author: " (" + author + ")"}])
//         setAuthor('')
//         setValue('')
//     }
//
//     const creatChange = (ev) => {
//         setValue(ev.target.value)
//
//     }
//
//     const creatChangeTwo = (eve) => {
//         setAuthor(eve.target.value)
//     }
//
//     useEffect(() => {
//         setTimeout(() => {
//             if (messages.length > 0 && messages[messages.length - 1]?.author !== "bot") {
//                 if (messages[messages.length - 1]?.author !== "") {
//                     setMessages(prevState => [...prevState, {id: nanoid(5), value: "Ответ робота: ", author: "bot"}])
//                 }
//             }
//         }, 2500)
//         inputElement.current.focus();
//
//     }, [messages])
//
//
//
//     return <div>
//
//         <div style={{display: "flex"}}>
//             <Navigation/>
//         </div>
//
//         <div className='form'>
//
//             <ListItem  />
//             <div className='list-mess'>
//                 {messages.map((message, id) =>
//                     <h3  key={id}>{message.value}
//                         {message.author} </h3>
//                 )}
//             </div>
//
//             <div className='form-input'>
//                 <Textarea inputRef={inputElement} className='textarea' change={creatChange} value={value}
//                           placeholder={placeholderText}/>
//                 <Input className='input' change={creatChangeTwo} value={author} placeholder={placeholderAuthor}/>
//                 <Button className='btn' name={name} onClick={createClick}/>
//
//             </div>
//         </div>
//     </div>
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//последняя рабочая
// import React, {useState, useEffect} from 'react';
// import {Input} from "./Input";
// import {Button} from "./Button";
// import {Textarea} from "./Textarea";
// import {ListItem} from "./ListItem";
// import {Navigation} from "./Navigation";
//
// import {nanoid} from 'nanoid'
// import '../App.css';
//
// export const Form = () => {
//     const [value, setValue] = useState('')
//     const [author, setAuthor] = useState('')
//     const [messages, setMessages] = useState([])
//
//     const name = 'отправить'
//     const placeholderText = 'Твой текст'
//     const placeholderAuthor = 'Твоё имя'
//     const inputElement = React.createRef();
//
//     const createClick = () => {
//         setMessages(pervstate => [...pervstate, {id: nanoid(5), value: value + " ", author: " (" + author + ")"}])
//         setAuthor('')
//         setValue('')
//     }
//
//     const creatChange = (ev) => {
//         setValue(ev.target.value)
//
//     }
//
//     const creatChangeTwo = (eve) => {
//         setAuthor(eve.target.value)
//     }
//
//     useEffect(() => {
//         setTimeout(() => {
//             if (messages.length > 0 && messages[messages.length - 1]?.author !== "bot") {
//                 if (messages[messages.length - 1]?.author !== "") {
//                     setMessages(prevState => [...prevState, {id: nanoid(5), value: "Ответ робота: ", author: "bot"}])
//                 }
//             }
//         }, 2500)
//         inputElement.current.focus();
//
//     }, [messages])
//
//     return <div>
//
//         <div style={{display: "flex"}}>
//             <Navigation/>
//         </div>
//
//         <div className='form'>
//
//           <ListItem messageSet={messages} />
//
//             <div className='list-mess'>
//                 {messages.map((message, id) =>
//                     <h3  key={id}>{message.value}
//                         {message.author} </h3>
//                 )}
//             </div>
//
//             <div className='form-input'>
//                 <Textarea inputRef={inputElement} className='textarea' change={creatChange} value={value}
//                           placeholder={placeholderText}/>
//                 <Input className='input' change={creatChangeTwo} value={author} placeholder={placeholderAuthor}/>
//                 <Button className='btn' name={name} onClick={createClick}/>
//
//             </div>
//         </div>
//     </div>
// }


import React, {useState, useEffect} from 'react';
import {Input} from "./Input";
import {Button} from "./Button";
import {Textarea} from "./Textarea";
import {nanoid} from 'nanoid'
import "../../App.css"


import {useParams} from "react-router";

import {ListItem} from "../ListItem";
import {MessageList} from "./MessageList";


export const Form = ({chatList, onAddChat, messages, setMessages}) => {
    const {chatId} = useParams()
    console.log(chatId)
    
    // console.log("chatId", chatId)
    const [value, setValue] = useState('')
    const [author, setAuthor] = useState('')
    const inputElement = React.createRef();

    const createClick = () => {
        //TODO тут ошибка, что messages (pervstate) не итерируется. Так как messages это не массив в объект
        // Исправляем на массив в initialState в App js
        // Добавлять скобки к полю author и пустую строку к value нет смысла. value итак строковые данные
        // ну а хранить значение в скобках внутри объектов не нужно.
        //Статайресь соблюдать структуру данных. Если у вас структура объекта message одна и данные там одного типа
        // - так должно быть везде
        setMessages((prevState) => [
            ...prevState,
            {
                id: nanoid(5),
                value: value,
                author: author,
                //добавил chatID чтобы сообщение знало к какому чату относится
                chatId:chatId
            }
        ])
        setAuthor('')
        setValue('')
        console.log(messages[chatId])
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
                    // setMessages(prevState => [...prevState, {id: nanoid(5), value: "Ответ робота: ", author: "bot"}])
                    // TODO Добавил в объект нового сообщения поле chatID чтобы отслеживать какому чату принаджежит сообщение
                    //
                    setMessages(prev => [...prev, {id: nanoid(5), value: "Ответ робота: ", author: "bot", chatId:chatId}])
                }
            }
        }, 1500)
        inputElement.current.focus();
    }, [messages])

    return <div>
        <div className='form'>
            <ListItem chatList={chatList} onAddChat={onAddChat}/>

            {/* //TODO Тут ошибка, так как chatID это строковое значение а подобная запись arr[index]
            //работает только в том случае если мы передаем число. Поэтому либо id чата нужно делать числом
            вы же пытались получить значение из массива по индексу, который является строкой( так не работает)
            array[0] - вернет элемент по индексу ноль
            array['id'] - вернет undefined так как такого индекса никогда не существует в массиве
            //либо переписать логику по изъятию элемента из массива. Я сделал вторым способом */}
            {/* Пробегаемся по массиву фильтром чтобы найти только те сообщения у которых чат id совпадает с id из хука */}
            <MessageList messages={chatId ? messages.filter((e)=> e.chatId === chatId) : []}/>
           
            <div className='form-input'>
                <Textarea inputRef={inputElement} className='textarea' change={creatChange} value={value}
                          placeholder='Твой текст'/>
                <Input className='input' change={creatChangeTwo} value={author} placeholder='Твоё имя'/>
                <Button className='btn' name='отправить' onClick={createClick}/>

            </div>
        </div>
    </div>
}



















