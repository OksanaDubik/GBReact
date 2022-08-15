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

    // Смотрите. useEffect срабатывает либо с случае монтирования компонента
    // Либо в случае, если, переданные в массив зависимостей, параметры изменяются.
    // Так как автор - это состояние, то при его изменении useEffect срабатывает.
    // А изменяется оно в том числе и при печати в инпут. Ведь когда вы допечатываете в инпут срабатывает событие
    // onChange и состояние изменяется
    useEffect(() => {
        //Для демонстрации теперь при печати в инпут у вас вызывается этот лог для каждой напечатанной буквы
        console.log('effect')
        //Добавил чтобы вы увидели массив сообщений
        console.log(messages)

        let timeout = setTimeout(() => {
            
            // не самый хороший вариант хранить в массиве поля как элементы. Потому что (увидите в консоль логе выше)
            // оптимально будет хранить в массиве объект каждого сообщения.
            // выглядеть будет примерно так 
            // [
            //     {
            //         author:author,
            //         text:'someText'
            //     },
            //     {
            //         author:author,
            //         text:'someText'
            //     },
            // ]
            // И когда вы обновляете состояние то лучше делать примерно так
            // setMessages(pervstate => [...pervstate, message])
            // структура объекта message = {
            //     author,
            //     text,
            //     и т д
            // }
            // Таким образом у вас будет красивы массив объектов имеющий структуру. В этой структуре
            // в дальнейшем будет удобно ориентироваться и у вас будет каждое сообщение, как отдельный объект
            setMessages([...messages, value, author, answer])
            setAuthor('')
            setValue('')
            setAnswer("Оставь меня, сегодня я в печали")
        }, 1500)

        //Таймаут можно не очищать, он одноразовый, очищать нужно только интервалы
        return () => clearTimeout(timeout)

        // Задайте себе вопрос. Когда я хочу, чтобы робот мне ответил? Когда изменяется что?
        // В данном задании самый оптимальный ответ - когда изменяется массив моих сообщений (messages)
        // Поэтому в данный хук следует передавать только messages как зависимость.
        // Важный нотс - так как у вас в хуке нету проверок, передача messages будет запускать бесконечный цикл
        // Потому что эффект меняет состояние - происходит ререндер и снова активируется эффект, опять меняя состояние
        // Решение такое - сделать проверку(данный вариант оптимален для дз). Например - проверить если последнее сообщение 
        //имеет автора человек, то выполняете свой setTimeout и пушите сообщение робота в стейт
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

