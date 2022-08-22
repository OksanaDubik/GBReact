import React from 'react';
import '../App.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const Textarea = (props, ref) => {

    return (
        <TextareaAutosize
            autoFocus={true} className="textarea" ref={props.inputRef}
            value={props.value} onChange={props.change} placeholder={props.placeholder}
            maxRows={10}
            aria-label="maximum height"

            style={{
                width: "100%",
                background: "#172674",
                color: "#f5f5f7",
                outline: "1px solid ghostwhite",
                padding: "15px 0"
            }}
        />
    )
}