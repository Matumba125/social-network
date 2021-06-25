import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const dialogsData=[
    {
        id: "1",
        userName: "Dimych"
    },
    {
        id: "2",
        userName: "Andrey"
    },
    {
        id: "3",
        userName: "Sveta"
    },
    {
        id: "4",
        userName: "Sasha"
    },
    {
        id: "5",
        userName: "Viktor"
    },
    {
        id: "6",
        userName: "Valera"
    }
]

const messageData=[
    {
        id: "1",
        messageText: "HI"
    },
    {
        id: "2",
        messageText: "Hello"
    },
    {
        id: "3",
        messageText: "YO"
    }
]


const postsData = [
    {
        id: "1",
        postContent: "Hello World !!!",
        postLikes: 15
    },
    {
        id: "2",
        postContent: "It's my first post!!",
        postLikes: 28
    }
]

ReactDOM.render(
    <React.StrictMode>
        <App
            dialogsBigData={dialogsData}
            messageBigData={messageData}
            postsBigData={postsData}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
