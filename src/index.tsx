import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addMessage, changeMessageText, observer} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, changePostText} from './redux/state';


export const render = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                changePostTextCallback={changePostText}
                addMessage={addMessage}
                changeMessageTextCallback={changeMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );

}

render();

observer(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
