import React from 'react';

export const MessageList = ({messages}) => {
    return (
        <div className='list-mess'>
            { messages.map((message, id) =>
                <h3 key={id}>{message.value}
                    {message.author} </h3>,
            )}
        </div>
    );
};