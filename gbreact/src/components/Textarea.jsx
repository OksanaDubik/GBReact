import React from 'react';
import '../App.css';

export const Textarea = (props) => {
    return (
    <textarea className="input  textarea"  value={props.value}  onChange={props.change} placeholder={props.placeholder}/>
    )
}