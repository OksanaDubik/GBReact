// import React, {useEffect} from 'react';
// import {Form} from "../Form";
// import {useNavigate} from 'react-router'
//
//
// export const News = () => {
//       const hist = useNavigate();
//
//     return (
//         <div>
//             <h1>News</h1>
//             <Form />
//            <button onClick={() => hist(-1)}>Go Back</button>
//         </div>
//     );
// };

import React, {useEffect} from 'react';
import {Form} from "../Form";
import {useNavigate, useLocation} from 'react-router'
import {ListItem} from "../ListItem";


export const News = ({messageSet}) => {
      const hist = useNavigate();
const location = useLocation()
    console.log(location)
    return (
        <div>
            <h1>News</h1>

            <Form  />
           <button onClick={() => hist(-1)}>Go Back</button>
        </div>
    );
};