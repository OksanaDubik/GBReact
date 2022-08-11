// import React, {Component} from "react";
//
//
// export class Button extends Component {
//
//     render() {
//
//         return <button onClick={this.props.onClick}>{this.props.name}</button>
//     }
// }
import React  from 'react';

export const Button = (props) => {
    return (
        <button className='btn' onClick={props.onClick}>{props.name}</button>
    );
}
