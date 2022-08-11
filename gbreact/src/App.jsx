// import React, {Component} from "react";
// import {Form} from "./components/Form";
//
// export class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <Form/>
//
//             </>
//         )
//
//     }
//
// }


//функциональные компоненты
import React from "react";
import './App.css';
import {Message} from "./Message";
import {Form} from "./components/Form";
const text = "Я создал первый компонент"

export function App() {
  return (
    <div className="App">
  <Message text={text}/>
        <Form/>
    </div>
  );
}


