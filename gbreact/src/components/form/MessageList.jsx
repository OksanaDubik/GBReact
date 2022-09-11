import React from 'react';

export const MessageList = ({messages}) => {
    return (
        <div className='list-mess'>
            {
                messages.map((e,i)=>(<div key={e.i}>{e.value}</div>))
            }
        </div>
    );
};