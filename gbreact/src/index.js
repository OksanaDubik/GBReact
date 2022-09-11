// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import {App} from './App';
// import {BrowserRouter} from "react-router-dom";
// import state from "./redux/state";
// import {Provider} from 'react-redux';
// import store from './store/indexStore';
//
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <Provider store={store}>
//         <BrowserRouter>
//
//             <App state={state} />
//
//         </BrowserRouter>
//         </Provider>
//     </React.StrictMode>
// );
//

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import state from "./redux/state";
import {Provider} from 'react-redux';
import store from './store/indexStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>

                <App state={state} />

            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

