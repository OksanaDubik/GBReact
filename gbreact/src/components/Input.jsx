// import React, {Component} from "react";
//
//
// export class Input extends Component {
//
//     render() {
//         return <input type="text" value={this.props.value}  onChange={this.props.change} placeholder={this.props.placeholder}/>
//     }
// }
import React from 'react';
import '../App.css';

export const Input = (props) => {
    return (
        <input className="input" type="text" value={props.value}  onChange={props.change} placeholder={props.placeholder}/>
    );
}