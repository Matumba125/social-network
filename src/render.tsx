import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./redux/PropsType";
import {addPost, changeNewText} from './redux/state';


export const rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                changeNewTextCallback={changeNewText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );

}
