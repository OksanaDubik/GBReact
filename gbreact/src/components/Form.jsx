import React, {useState, useEffect} from 'react';
import {Input} from "./Input";
import {Button} from "./Button";
import '../App.css';
import {Textarea} from "./Textarea";

export const Form = () => {
    const [value, setValue] = useState('')
    const [author, setAuthor] = useState('')
    const [messages, setMessages] = useState([])
    //answer в целом не нужен, так как сообщения от робота добавляются в messages 
    //так проще и не нужно контроллировать 2 массива, вместо этого массив 1
    // const [answer, setAnswer] = useState('')


    const name = 'отправить'
    const placeholderText = 'можешь написать свой текст'
    const placeholderAuthor = 'можешь представиться, если захочешь'

    const createClick = () => {
        //В конце указываем поля autor и value внутри обджекта, чтобы 
        //каждое сообщение было отдельным объектом с полями. А еще лучше изменяйте состояние через передачу
        // предыдщего состояния в качестве параметра
        //Было
        // setMessages([...messages, {value, author}])
        //Стало
        setMessages(pervstate => [...pervstate, {value:value, author:author}])
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
            //Было
            // setMessages([...messages, value, author, answer])
            //Стало
            //Проверяем что messages не пусты (длина больше нуля) и что у messages поле author  != боту
            //тем самым мы понимаем, что последнее сообщение было от человека и тогда обновляем стейт
            //добавляя сообщение от робота иначе это пропускается стейт не меняется. Тем самым мы избегаем 
            // бесконечного цикла, когда эффект меняет стейт -> происходит отбновление -> выполняется эффект
            //, который меняет стейт -> снова рендер и так до бесконечности
            if(messages.length > 0 && messages[messages.length - 1]?.author !== "bot"){
                setMessages(pervstate => [...pervstate, {value : "Ответ робота", author:"bot"}])
            }
            //Можно не очищать стейты, так как отвечает робот, а значит они уже очищены
            setAuthor('')
            setValue('')
            console.log("timeout")
        }, 1500)
        //Передаем в массив зависимостей только message
    }, [messages])

    return <div className='form'>

        <ul>
            {messages.map((message, ind) =>
                <li key={ind} className='list'>
                    {/* добавлено, так как в message теперь объекты поэтому запрашиваем доступ к полю */}
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

