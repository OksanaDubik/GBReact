// import React, {Component} from "react";
//
// import {Input} from "./Input";
// import {Button} from "./Button";
// import {Robot} from "./Robot";
//
// export class Form extends Component {
//     constructor(props) {
//         super(props);
//
//     }
//     state = {
//         name: 'click',
//         placeholderText: 'text',
//         placeholderAuthor: 'author',
//         value: '',
//         author: '',
//         messages: [],
//         answer: "Отстань, я просто робот"
//
//     }
//     createClick = () => {
//       this.state.author? this.setState({messages: [...this.state.messages, "text: " + this.state.value, "author: " + this.state.author, this.state.author + "!" + this.state.answer]}):this.setState({messages: [...this.state.messages, "text: " + this.state.value, "author: " + this.state.author, "Кто это написал?"]})
//         this.setState({author: ''})
//         this.setState({value: ''})
//     }
//     creatChange = (ev) => {
//         this.setState({value: ev.target.value})
//
//     }
//
//
//     creatChangeTwo = (eve) => {
//         this.setState({author: eve.target.value})
//     }
//
//     componentDidUpdate=()=>
//     {
//         const {messages}=this.state;
//         if (messages.length % 2 === 1){
//             setTimeout(()=>this.setState({
//             messages: [...this.state.messages, "Чего хотел?"]
//
//             }),3000)
//         }
//
//     }
//     componentWillUnmount() {
//
//         clearTimeout(this.messages)
//     }
//
//
//     render() {
//         return [
//
//             <ul>
//                 {this.state.messages.map(message =>
//                     <li>{message}</li>
//                 )}
//             </ul>,
//
//             <Input change={this.creatChange} value={this.state.value} placeholder={this.state.placeholderText}/>,
//             <Input change={this.creatChangeTwo} value={this.state.author} placeholder={this.state.placeholderAuthor}/>,
//             <Robot text={this.props.text}/>,
//             <Button name={this.state.name} onClick={this.createClick}/>
//         ]
//     }
// }
import React, {useState, useEffect} from 'react';
import {Input} from "./Input";
import {Button} from "./Button";
import '../App.css';



export const Form = () => {


    const [name] = useState('click')
    const [placeholderText] = useState('можешь написать свой текст')
    const [placeholderAuthor] = useState('можешь представиться, если захочешь')
    const [value, setValue] = useState('')
    const [author, setAuthor] = useState('')
    const [messages, setMessages] = useState([])
    const [answer] = useState("Я передумал общаться")


    const createClick = () => {
        setMessages(author ? [...messages, "text: " + value, "author: " + author, author + "! " + answer] : [...messages, value, author, "Как тебя зовут?"])
        setAuthor('')
        setValue('')
    }
    const createAnswer = () => {
        setMessages(author
            ? [...messages, "text: " + value, "author: " + author, author + "! " + answer]
            : [...messages, value, author, "Привет, давай поговорим"])
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
        setMessages(["Привет, давай поговорим"])
    }, [])

    useEffect(() => {
        return () => {
            createAnswer()
        }
    }, [setAuthor])


    return [
        <ul>
            {messages.map(message =>
                <li className='list'>{message}</li>
            )}
        </ul>,
        <Input className='input' change={creatChange} value={value} placeholder={placeholderText}/>,
        <Input className='input' change={creatChangeTwo} value={author} placeholder={placeholderAuthor}/>,
        <Button className='btn' name={name} onClick={createClick}/>
    ]
}

