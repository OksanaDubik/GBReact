import './App.css';
import {Message} from "./Message";

const text = "Я создал первый компонент"

export function App() {
  return (
    <div className="App">

        <Message text={text}/>

    </div>
  );
}


